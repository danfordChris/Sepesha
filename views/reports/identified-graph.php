<?php $this->registerJsFile('@web/js/canvas24.js', ['depends' => [\yii\web\JqueryAsset::class]]); ?>

<div id="container1" class="p-0" style="height: 17em; width:100%;"></div>

<?php $script = <<< JS
        $(document).ready(function() {
        $.get("reports/identified-chart", function(data) {
        var total=0;

        data.forEach(function(item) {
        total +=item.y;
        });

        var dataWithPercentages=data.map(function(item) {
        return {
        label: item.label,
        y: ((item.y / total) * 100).toFixed(2) // Calculate the percentage
        };
        });

        var containerWidth = $("#container1").width();
        var containerHeight = $("#container1").height();


        // Create the CanvasJS chart
        var chart=new CanvasJS.Chart("container1", {
        animationEnabled: true,
        exportEnabled: false,
        theme: "theme1" ,
        width:containerWidth,
        width:containerHeight,
        // height:300,
        title: {
        text: "How Beneficiaries Identified" ,
        fontSize: 15,
        fontFamily: "arial" ,
        fontWeight: "bold" ,
        fontStyle: "normal"
        },
        Axis: {

        // title: null, // string
        // titleFontColor: "black",
        // titleFontSize: 20,
        // titleFontFamily: "arial",
        titleFontWeight: "bold",
        // titleFontStyle: "normal",

        // labelAngle: 0,
        // labelFontFamily: "arial",
        // labelFontColor: "black",
        // labelFontSize: 12,
        labelFontWeight: "bold",
        // labelFontStyle: "normal",
        labelAutoFit: true,
        // labelWrap: true,
        // labelMaxWidth: null,
        // labelFormatter: null,

        // prefix: "",
        // suffix: "",


        tickLength: 5,
        // tickColor: "black",
        tickThickness: 2,

        lineColor: "black",
        lineThickness: 1,
        lineDashType: "solid",

        // gridColor: "A0A0A0",
        gridThickness: 1,
        // gridDashType: "solid",

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
        type: "doughnut" ,
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
                var containerWidth = $("#container1").width();
                var containerHeight = $("#container1").height();
                chart.options.width = containerWidth;
                chart.options.height = containerHeight;
                chart.render();
        })
        JS;

$this->registerJs($script);
?>