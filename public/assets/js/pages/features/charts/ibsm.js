   "use strict";

// Shared Colors Definition
    const primary = '#6993FF';
    const success = '#1BC5BD';
    const info = '#8950FC';
    const warning = '#FFA800';
    const danger = '#F64E60';

    var KTApexChartsDemo = function() {

        var _umur = function() {
            const apexChart = "#chart_umur";
            var options = {
                series: data_umur,
                labels: label_umur,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success, warning, info, danger]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _jantina = function() {
            const apexChart = "#chart_jantina";
            var options = {
                series: data_jantina,
                labels: ['Lelaki', 'Perempuan'],
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _etnik = function() {
            const apexChart = "#chart_etnik";
            var options = {
                series: [{
                    name: "Etnik",
                    data: data_bangsa
                }],
                chart: {
                    type: 'bar',
                    height: 400,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: '3. Etnik'
                },
                xaxis: {
                    categories: label_bangsa,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _kahwin = function() {
            const apexChart = "#chart_kahwin";
            var options = {
                series: data_kahwin,
                labels: ['Bujang', 'Berkahwin'],
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _kerja = function() {
            const apexChart = "#chart_kerja";
            var options = {
                series: [{
                    name: "Status",
                    data: data_kerja
                }],
                chart: {
                    type: 'bar',
                    height: 400,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: 'Status Pekerjaan'
                },
                xaxis: {
                    categories: label_kerja,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _pendidikan = function() {
            const apexChart = "#chart_pendidikan";
            var options = {
                series: [{
                    name: "Pendidikan",
                    data: data_didik
                }],
                chart: {
                    type: 'bar',
                    height: 400,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: 'Taraf Pendidikan'
                },
                xaxis: {
                    categories: label_didik,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _sukan = function() {
            const apexChart = "#chart_sukan";
            var options = {
                series: data_sukan,
                labels: ['Ya', 'Tidak'],
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _masaSukan = function() {
            const apexChart = "#chart_masa_sukan";
            var options = {
                series: [{
                    name: "Jangka Masa",
                    data: data_masa_sukan
                }],
                chart: {
                    type: 'bar',
                    height: 400,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_masa_sukan,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _jenisSukan = function() {
            const apexChart = "#chart_jenis_sukan";
            var options = {
                series: [{
                    name: "Jenis Sukan",
                    data: data_jenis_sukan
                }],
                chart: {
                    type: 'bar',
                    height: 600,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_jenis_sukan,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _waktuSukan = function() {
            const apexChart = "#chart_waktu_sukan";
            var options = {
                series: data_waktu_sukan,
                labels: label_waktu_sukan,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success, warning, info]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _kawanSukan = function() {
            const apexChart = "#chart_kawan_sukan";
            var options = {
                series: data_kawan_sukan,
                labels: label_kawan_sukan,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success, warning, info]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _lokasiSukan = function() {
            const apexChart = "#chart_lokasi_sukan";
            var options = {
                series: [{
                    name: "Lokasi Sukan",
                    data: data_lokasi_sukan
                }],
                chart: {
                    type: 'bar',
                    height: 600,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_lokasi_sukan,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _mediumSukan = function() {
            const apexChart = "#chart_medium_sukan";
            var options = {
                series: [{
                    name: "Medium Sukan",
                    data: data_medium_sukan
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_medium_sukan,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _sukarela1 = function() {
            const apexChart = "#chart_sukarela1";
            var options = {
                series: [{
                    name: "Sukarela",
                    data: data_sukarela1
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_sukarela1,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _sukarela2 = function() {
            const apexChart = "#chart_sukarela2";
            var options = {
                series: [{
                    name: "Sukarela",
                    data: data_sukarela2
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_sukarela2,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _sukarela3 = function() {
            const apexChart = "#chart_sukarela3";
            var options = {
                series: [{
                    name: "Sukarela",
                    data: data_sukarela3
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_sukarela3,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _sukarela4 = function() {
            const apexChart = "#chart_sukarela4";
            var options = {
                series: [{
                    name: "Sukarela",
                    data: data_sukarela4
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_sukarela4,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _sukarela5 = function() {
            const apexChart = "#chart_sukarela5";
            var options = {
                series: [{
                    name: "Sukarela",
                    data: data_sukarela5
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_sukarela5,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dedikasi1 = function() {
            const apexChart = "#chart_dedikasi1";
            var options = {
                series: [{
                    name: "Dedikasi",
                    data: data_dedikasi1
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_dedikasi1,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dedikasi2 = function() {
            const apexChart = "#chart_dedikasi2";
            var options = {
                series: [{
                    name: "Dedikasi",
                    data: data_dedikasi2
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_dedikasi2,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dedikasi3 = function() {
            const apexChart = "#chart_dedikasi3";
            var options = {
                series: [{
                    name: "Dedikasi",
                    data: data_dedikasi3
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_dedikasi3,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dedikasi4 = function() {
            const apexChart = "#chart_dedikasi4";
            var options = {
                series: [{
                    name: "Dedikasi",
                    data: data_dedikasi4
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_dedikasi4,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dedikasi5 = function() {
            const apexChart = "#chart_dedikasi5";
            var options = {
                series: [{
                    name: "Dedikasi",
                    data: data_dedikasi5
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_dedikasi5,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dedikasi6 = function() {
            const apexChart = "#chart_dedikasi6";
            var options = {
                series: [{
                    name: "Dedikasi",
                    data: data_dedikasi6
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_dedikasi6,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dedikasi7 = function() {
            const apexChart = "#chart_dedikasi7";
            var options = {
                series: [{
                    name: "Dedikasi",
                    data: data_dedikasi7
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_dedikasi7,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dedikasi8 = function() {
            const apexChart = "#chart_dedikasi8";
            var options = {
                series: [{
                    name: "Dedikasi",
                    data: data_dedikasi8
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_dedikasi8,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dedikasi9 = function() {
            const apexChart = "#chart_dedikasi9";
            var options = {
                series: [{
                    name: "Dedikasi",
                    data: data_dedikasi9
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_dedikasi9,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _belanja1 = function() {
            const apexChart = "#chart_belanja1";
            var options = {
                series: [{
                    name: "Perbelanjaan",
                    data: data_belanja1
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_belanja1,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _belanja2 = function() {
            const apexChart = "#chart_belanja2";
            var options = {
                series: [{
                    name: "Perbelanjaan",
                    data: data_belanja2
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_belanja2,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _belanja3 = function() {
            const apexChart = "#chart_belanja3";
            var options = {
                series: [{
                    name: "Perbelanjaan",
                    data: data_belanja3
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_belanja3,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _belanja4 = function() {
            const apexChart = "#chart_belanja4";
            var options = {
                series: [{
                    name: "Perbelanjaan",
                    data: data_belanja4
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_belanja4,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _belanja5 = function() {
            const apexChart = "#chart_belanja5";
            var options = {
                series: [{
                    name: "Perbelanjaan",
                    data: data_belanja5
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_belanja5,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _belanja6 = function() {
            const apexChart = "#chart_belanja6";
            var options = {
                series: [{
                    name: "Perbelanjaan",
                    data: data_belanja6
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_belanja6,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _belanja7 = function() {
            const apexChart = "#chart_belanja7";
            var options = {
                series: [{
                    name: "Perbelanjaan",
                    data: data_belanja7
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_belanja7,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _sumbang1 = function() {
            const apexChart = "#chart_sumbang1";
            var options = {
                series: [{
                    name: "Sumbangan",
                    data: data_sumbang1
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_sumbang1,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _sumbang2 = function() {
            const apexChart = "#chart_sumbang2";
            var options = {
                series: [{
                    name: "Sumbangan",
                    data: data_sumbang2
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_sumbang2,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _sumbang3 = function() {
            const apexChart = "#chart_sumbang3";
            var options = {
                series: [{
                    name: "Sumbangan",
                    data: data_sumbang3
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_sumbang3,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _sumbang4 = function() {
            const apexChart = "#chart_sumbang4";
            var options = {
                series: [{
                    name: "Sumbangan",
                    data: data_sumbang4
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_sumbang4,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _sumbang5 = function() {
            const apexChart = "#chart_sumbang5";
            var options = {
                series: [{
                    name: "Sumbangan",
                    data: data_sumbang5
                }],
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        vertical: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_sumbang5,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor1 = function() {
            const apexChart = "#chart_faktor1";
            var options = {
                series: data_faktor1,
                labels: label_faktor1,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor2 = function() {
            const apexChart = "#chart_faktor2";
            var options = {
                series: data_faktor2,
                labels: label_faktor2,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor3 = function() {
            const apexChart = "#chart_faktor3";
            var options = {
                series: data_faktor3,
                labels: label_faktor3,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor4 = function() {
            const apexChart = "#chart_faktor4";
            var options = {
                series: data_faktor4,
                labels: label_faktor4,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor5 = function() {
            const apexChart = "#chart_faktor5";
            var options = {
                series: data_faktor5,
                labels: label_faktor5,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor6 = function() {
            const apexChart = "#chart_faktor6";
            var options = {
                series: data_faktor6,
                labels: label_faktor6,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor7 = function() {
            const apexChart = "#chart_faktor7";
            var options = {
                series: data_faktor7,
                labels: label_faktor7,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor8 = function() {
            const apexChart = "#chart_faktor8";
            var options = {
                series: data_faktor8,
                labels: label_faktor8,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor9 = function() {
            const apexChart = "#chart_faktor9";
            var options = {
                series: data_faktor9,
                labels: label_faktor9,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor10 = function() {
            const apexChart = "#chart_faktor10";
            var options = {
                series: data_faktor10,
                labels: label_faktor10,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor11 = function() {
            const apexChart = "#chart_faktor11";
            var options = {
                series: data_faktor11,
                labels: label_faktor11,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor12 = function() {
            const apexChart = "#chart_faktor12";
            var options = {
                series: data_faktor12,
                labels: label_faktor12,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor13 = function() {
            const apexChart = "#chart_faktor13";
            var options = {
                series: data_faktor13,
                labels: label_faktor13,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor14 = function() {
            const apexChart = "#chart_faktor14";
            var options = {
                series: data_faktor14,
                labels: label_faktor14,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor15 = function() {
            const apexChart = "#chart_faktor15";
            var options = {
                series: data_faktor15,
                labels: label_faktor15,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor16 = function() {
            const apexChart = "#chart_faktor16";
            var options = {
                series: data_faktor16,
                labels: label_faktor16,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor17 = function() {
            const apexChart = "#chart_faktor17";
            var options = {
                series: data_faktor17,
                labels: label_faktor17,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor18 = function() {
            const apexChart = "#chart_faktor18";
            var options = {
                series: data_faktor18,
                labels: label_faktor18,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor19 = function() {
            const apexChart = "#chart_faktor19";
            var options = {
                series: data_faktor19,
                labels: label_faktor19,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor20 = function() {
            const apexChart = "#chart_faktor20";
            var options = {
                series: data_faktor20,
                labels: label_faktor20,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor21 = function() {
            const apexChart = "#chart_faktor21";
            var options = {
                series: data_faktor21,
                labels: label_faktor21,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor22 = function() {
            const apexChart = "#chart_faktor22";
            var options = {
                series: data_faktor22,
                labels: label_faktor22,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _faktor23 = function() {
            const apexChart = "#chart_faktor23";
            var options = {
                series: data_faktor23,
                labels: label_faktor23,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dorong1 = function() {
            const apexChart = "#chart_dorong1";
            var options = {
                series: data_dorong1,
                labels: label_dorong1,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dorong2 = function() {
            const apexChart = "#chart_dorong2";
            var options = {
                series: data_dorong2,
                labels: label_dorong2,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dorong3 = function() {
            const apexChart = "#chart_dorong3";
            var options = {
                series: data_dorong3,
                labels: label_dorong3,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dorong4 = function() {
            const apexChart = "#chart_dorong4";
            var options = {
                series: data_dorong4,
                labels: label_dorong4,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dorong5 = function() {
            const apexChart = "#chart_dorong5";
            var options = {
                series: data_dorong5,
                labels: label_dorong5,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dorong6 = function() {
            const apexChart = "#chart_dorong6";
            var options = {
                series: data_dorong6,
                labels: label_dorong6,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dorong7 = function() {
            const apexChart = "#chart_dorong7";
            var options = {
                series: data_dorong7,
                labels: label_dorong7,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dorong8 = function() {
            const apexChart = "#chart_dorong8";
            var options = {
                series: data_dorong8,
                labels: label_dorong8,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dorong9 = function() {
            const apexChart = "#chart_dorong9";
            var options = {
                series: data_dorong9,
                labels: label_dorong9,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dorong10 = function() {
            const apexChart = "#chart_dorong10";
            var options = {
                series: data_dorong10,
                labels: label_dorong10,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _dorong11 = function() {
            const apexChart = "#chart_dorong11";
            var options = {
                series: data_dorong11,
                labels: label_dorong11,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang1 = function() {
            const apexChart = "#chart_halang1";
            var options = {
                series: data_halang1,
                labels: label_halang1,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang2 = function() {
            const apexChart = "#chart_halang2";
            var options = {
                series: data_halang2,
                labels: label_halang2,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang3 = function() {
            const apexChart = "#chart_halang3";
            var options = {
                series: data_halang3,
                labels: label_halang3,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang4 = function() {
            const apexChart = "#chart_halang4";
            var options = {
                series: data_halang4,
                labels: label_halang4,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang5 = function() {
            const apexChart = "#chart_halang5";
            var options = {
                series: data_halang5,
                labels: label_halang5,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang6 = function() {
            const apexChart = "#chart_halang6";
            var options = {
                series: data_halang6,
                labels: label_halang6,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang7 = function() {
            const apexChart = "#chart_halang7";
            var options = {
                series: data_halang7,
                labels: label_halang7,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang8 = function() {
            const apexChart = "#chart_halang8";
            var options = {
                series: data_halang8,
                labels: label_halang8,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang9 = function() {
            const apexChart = "#chart_halang9";
            var options = {
                series: data_halang9,
                labels: label_halang9,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang10 = function() {
            const apexChart = "#chart_halang10";
            var options = {
                series: data_halang10,
                labels: label_halang10,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang11 = function() {
            const apexChart = "#chart_halang11";
            var options = {
                series: data_halang11,
                labels: label_halang11,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _halang12 = function() {
            const apexChart = "#chart_halang12";
            var options = {
                series: data_halang12,
                labels: label_halang12,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _esukan = function() {
            const apexChart = "#chart_esukan";
            var options = {
                series: data_esukan,
                labels: label_esukan,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _tsukan = function() {
            const apexChart = "#chart_tsukan";
            var options = {
                series: data_tsukan,
                labels: label_tsukan,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _libatesukan = function() {
            const apexChart = "#chart_libatesukan";
            var options = {
                series: [{
                    name: "Penglibatan",
                    data: data_libatesukan
                }],
                chart: {
                    type: 'bar',
                    height: 300,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_libatesukan,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _aksesSukan = function() {
            const apexChart = "#chart_aksessukan";
            var options = {
                series: [{
                    name: "Tempoh Akses",
                    data: data_aksessukan
                }],
                chart: {
                    type: 'bar',
                    height: 300,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                },
                xaxis: {
                    categories: label_aksessukan,
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                colors: [primary]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _esport1 = function() {
            const apexChart = "#chart_esport1";
            var options = {
                series: data_esport1,
                labels: label_esport1,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _esport2 = function() {
            const apexChart = "#chart_esport2";
            var options = {
                series: data_esport2,
                labels: label_esport2,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _esport3 = function() {
            const apexChart = "#chart_esport3";
            var options = {
                series: data_esport3,
                labels: label_esport3,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _esport4 = function() {
            const apexChart = "#chart_esport4";
            var options = {
                series: data_esport4,
                labels: label_esport4,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        var _esport5 = function() {
            const apexChart = "#chart_esport5";
            var options = {
                series: data_esport5,
                labels: label_esport5,
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10,
                        donut: {
                            size: '50%'
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: [primary, success]
            };

            var chart = new ApexCharts(document.querySelector(apexChart), options);
            chart.render();
        }

        return {
            // public functions
            init: function() {
                _umur();
                _jantina();
                _etnik();
                _kahwin();
                _kerja();
                _pendidikan();
                _sukan();
                _masaSukan();
                _jenisSukan();
                _waktuSukan();
                _kawanSukan();
                _lokasiSukan();
                _mediumSukan();
                _sukarela1();
                _sukarela2();
                _sukarela3();
                _sukarela4();
                _sukarela5();
                _dedikasi1();
                _dedikasi2();
                _dedikasi3();
                _dedikasi4();
                _dedikasi5();
                _dedikasi6();
                _dedikasi7();
                _dedikasi8();
                _dedikasi9();
                _belanja1();
                _belanja2();
                _belanja3();
                _belanja4();
                _belanja5();
                _belanja6();
                _belanja7();
                _sumbang1();
                _sumbang2();
                _sumbang3();
                _sumbang4();
                _sumbang5();
                _faktor1();
                _faktor2();
                _faktor3();
                _faktor4();
                _faktor5();
                _faktor6();
                _faktor7();
                _faktor8();
                _faktor9();
                _faktor10();
                _faktor11();
                _faktor12();
                _faktor13();
                _faktor14();
                _faktor15();
                _faktor16();
                _faktor17();
                _faktor18();
                _faktor19();
                _faktor20();
                _faktor21();
                _faktor22();
                _faktor23();
                _dorong1();
                _dorong2();
                _dorong3();
                _dorong4();
                _dorong5();
                _dorong6();
                _dorong7();
                _dorong8();
                _dorong9();
                _dorong10();
                _dorong11();
                _halang1();
                _halang2();
                _halang3();
                _halang4();
                _halang5();
                _halang6();
                _halang7();
                _halang8();
                _halang9();
                _halang10();
                _halang11();
                _halang12();
                _esukan();
                _tsukan();
                _libatesukan();
                _aksesSukan();
                _esport1();
                _esport2();
                _esport3();
                _esport4();
                _esport5();
            }
        };
    }();

    jQuery(document).ready(function() {
        KTApexChartsDemo.init();
    });