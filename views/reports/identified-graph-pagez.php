<!-- Include jQuery and Morris.js -->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>

<?php $this->registerJsFile('@web/js/canvas24.js', ['depends' => [\yii\web\JqueryAsset::class]]); ?>

<?php
$script = <<< JS
    $(document).ready(function() {
        $.get("identified-chart", function(data) {
            var total = 0;

            // Calculate total for percentage calculations
            data.forEach(function(item) {
                total += item.y;
            });

            // Convert data to percentage format
            var dataWithPercentages = data.map(function(item) {
                return {
                    label: item.label,
                    value: ((item.y / total) * 100).toFixed(2) // Calculate the percentage
                };
            });

            // Initialize Morris Donut chart
            function renderChart() {
                $('#chartContainer').empty(); // Clear chart container before rendering
                Morris.Donut({
                    element: 'chartContainer',
                    data: dataWithPercentages,
                    formatter: function(y) { return y + "%"; },
                    resize: true, // Enables responsiveness
                    colors: ['#0B62A4', '#3980B5', '#679DC6', '#95BBD7', '#B0CCE1']
                });
            }

            // Render initially
            renderChart();

            // Re-render on window resize
            $(window).resize(function() {
                renderChart();
            });
        });
    });
JS;
$this->registerJs($script);
?>

<!-- HTML container for the Morris chart -->
<div id="chartContainer" style="height: 250px; width:100%;"></div>