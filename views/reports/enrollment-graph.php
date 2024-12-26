<?php $this->registerJsFile('@web/js/canvas24.js', ['depends' => [\yii\web\JqueryAsset::class]]); ?>

<div id="chartContainer" class="p-0" style="height: 17em; width:100%;"></div>

<?php $script = <<< JS
        $(document).ready(function() {
        $.get("reports/enrollment-chart", function(data) {
        var total=0;

        data.forEach(function(item) {
        total +=item.y;
        });

        var dataWithPercentages=data.map(function(item) {
        return {
        label: item.label,
        y: ((item.y / total) * 100).toFixed(2) 
        };
        });

        var containerWidth = $("#chartContainer").width();
        var containerHeight = $("#chartContainer").height();


        var chart=new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: false,
        theme: "theme2" ,
        width:containerWidth,
        width:containerHeight,
        // height:300,
        title: {
        text: "Enrollment Breakdown" ,
        fontSize: 15,
        fontFamily: "arial" ,
        fontWeight: "bold" ,
        fontStyle: "normal"
        },
        toolTip: {
        content: "{label}: {y}%" ,
        cornerRadius: 1,
        borderRadius: 1,
        borderThickness: 2,
        fontWeight: "bold" ,
        fontStyle: "normal"
        },
        legend: {
        // fontSize: 14,
        fontFamily: "Helvetica" ,
        itemTextFormatter: function(e) {
        return e.dataPoint.label; 
        }
        },
        data: [{
        type: "pie" ,
        showInLegend: false,
        toolTipContent: "{label}: <strong>{y}%</strong>" ,
        indexLabel: "{label} - {y}%" ,
        dataPoints: dataWithPercentages 
        }]
        });

        chart.render(); 
        });
        });

        $(window).resize(function(){
                var containerWidth = $("chartContainer").width();
                var containerHeight = $("chartContainer").height();
                chart.options.width = containerWidth;
                chart.options.height = containerHeight;
                chart.render();
        })
        JS;

$this->registerJs($script);
?>