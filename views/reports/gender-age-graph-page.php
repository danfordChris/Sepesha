<?php $this->registerJsFile('@web/js/canvas24.js', ['depends' => [\yii\web\JqueryAsset::class]]); ?>

<div id="barChartContainer" class="p-0" style=" width: 100%;"></div>

<?php $script = <<< JS
    $(document).ready(function() {
        $.get("gender-age-chart", function(data) {
            var overallCategory = 'Total';

            data.maleData.push({ label: overallCategory, y: data.overallData[0].y }); 
            data.femaleData.push({ label: overallCategory, y: data.overallData[1].y }); 
            data.totalData.push({ label: overallCategory, y: data.overallData[2].y });  

            var chart = new CanvasJS.Chart("barChartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                theme: "theme1",
                title: {
                    text: "Beneficiaries Reached by Age",
                    fontSize: 24,
                    fontFamily: "arial",
                    fontWeight: "bold",
                    fontStyle: "normal"
                },
                axisY: {
                    title: "Beneficiaries",
                    includeZero: true,
                },
                axisX: {
                    title: "Age Category",
                },
                data: [
                    {
                        type: "column",
                        name: "Male",
                        showInLegend: true,
                        legendText: "Male",
                        toolTipContent: "Male ({label}): {y}",
                        dataPoints: data.maleData 
                    },
                    {
                        type: "column", 
                        name: "Female",
                        showInLegend: true,
                        legendText: "Female",
                        toolTipContent: "Female ({label}): {y}",
                        dataPoints: data.femaleData 
                    },
                    {
                        type: "column", 
                        name: "Total (age categories)",
                        showInLegend: true,
                        legendText: "Total (age categories)",
                        toolTipContent: "Total ({label}): {y}",
                        dataPoints: data.totalData 
                    }
                ]
            });

            chart.render();
        });
    });
JS;

$this->registerJs($script);
?>