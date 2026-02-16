document.querySelector('.collapse-toggle').addEventListener('click', function() {
  const targetId = this.getAttribute('data-collapse');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    // تبديل ظهور القائمة
    targetElement.classList.toggle('hidden');
    
    // لإضافة تأثير أنميشن بسيط (اختياري)
    if (!targetElement.classList.contains('hidden')) {
      targetElement.style.height = 'auto';
    } else {
      targetElement.style.height = '0';
    }
  }
});


window.addEventListener("load", () => {
  if (typeof buildChart !== "undefined") {
    
    // --- 1. الرسم العمودي (Bar Chart) للمهارات الأساسية ---
    (function () {
      buildChart('#apex-column-bar-chart', () => ({
        chart: {
          type: 'bar',
          height: 400,
          toolbar: { show: false },
          zoom: { enabled: false },
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800
          }
        },
        dataLabels: {
          enabled: true,
          formatter: value => `${value}%`,
          style: {
            fontSize: '12px',
            fontWeight: 'bold',
            colors: ['#fff']
          },
          dropShadow: { enabled: false }
        },
        grid: {
          show: false,
          padding: { top: 0, right: 0, bottom: 0, left: 10 }
        },
        states: {
          hover: {
            filter: {
              type: 'darken',
              value: 0.6 
            }
          },
          active: { filter: { type: 'none' } }
        },
        tooltip: { enabled: false },
        series: [
          {
            name: 'Skill Level',
            data: [95, 90, 85, 92, 80, 88, 85, 90] 
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '35px',
            borderRadius: 6,
            dataLabels: {
              position: 'center'
            }
          }
        },
        colors: ['#6b7280'], // Gray-500
        xaxis: {
          categories: ['HTML', 'CSS', 'Tailwind', 'Python', 'TS', 'React', 'Bootstrap',  'JS'],
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: {
            style: {
              colors: '#6b7280',
              fontSize: '14px',
              fontWeight: 700
            }
          }
        },
        yaxis: {
          min: 0,
          max: 100,
          tickAmount: 5,
          labels: {
            style: {
              fontWeight: 700,
              colors: '#6b7280'
            },
            formatter: value => `${value}%`
          }
        }
      }));
    })();

    // --- 2. مهارات الـ GitHub و Git (Radial Bar Chart) ---
    (function () {
      buildChart('#apex-radial-bar-chart', () => ({
        chart: {
          height: 380,
          type: 'radialBar'
        },
        // استخدام تدرجات الرمادي المتناسقة مع الرسم الأول
        colors: ['#6b7280', '#4b5563'], 
        plotOptions: {
          radialBar: {
            size: 185,
            hollow: {
              size: '50%' // جعل الفتحة الداخلية أصغر قليلاً لتبدو ممتلئة أكثر
            },
            track: {
              margin: 10,
              background: '#1e293b' // خلفية المسارات (داكنة لتناسب صفحتك)
            },
            dataLabels: {
              name: {
                fontSize: '1.2rem',
                color: '#6b7280'
              },
              value: {
                fontSize: '1rem',
                color: '#6b7280',
                formatter: value => `${value}%`
              },
              total: {
                show: true,
                fontWeight: 700,
                color: '#6b7280',
                fontSize: '1.1rem',
                label: 'Overall',
                formatter: function (w) {
                  return '92%' // متوسط مهاراتك الإضافية
                }
              }
            }
          }
        },
        grid: {
          padding: {
            top: 0,
            bottom: 0
          }
        },
        legend: {
          show: false,
          position: 'top',
          labels: {
            colors: '#6b7280',
            useSeriesColors: false
          },
          style:{
            padding:10,
          }
        },
        stroke: {
          lineCap: 'round'
        },
        series: [95,90], 
        labels: ['GitHub', 'Git']
      }))
    })()

  } else {
    console.error("FlyonUI/ApexCharts Helper functions not found.");
  }
});

document.querySelectorAll(".card").forEach(card =>{
  card.addEventListener("click",()=>{
    const container = document.querySelector(".con");

    container.classList.toggle("paused")
  })
})