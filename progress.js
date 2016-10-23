//(function(window,document){
    function Css3ProgressBar (containerId){
        var progressTemplate = document.getElementById('progressTemplate').innerHTML;
        var transform_styles = ['-webkit-transform',
                '-ms-transform',
                'transform'
            ];
        var mask,fill,that=this;

        function init(containerId){
            if(!containerId){
                return {'err':'No container found'};
            }
            var container = document.getElementById(containerId);

            if(!container){
                container = document.createElement('div');
                container.id(containerId);
                document.body.appendChild(container);
            }

            container.innerHTML=progressTemplate;
            that.mask = container.getElementsByClassName('mask')[0];
            console.log('mask created is ',that.mask);
            that.fill = container.getElementsByClassName('fill')[0];
            console.log('Fill created is ',that.fill);
        }
        init(containerId);
        function setProgress (value) {
            
            value = value ? value : Math.floor(Math.random() * 90) * -1;
            console.log('value is:', value);
            /** 
             * Check for negative values
             **/
            if (value < 0) {
                value = value * -1;
            }
            /** 
             * Check for values > 100
             **/
            if (value > 100) {
                value = value % 100;
            }
            /** 
             * Set the value inside the circle
             **/
            console.log('this mask',mask);
            document.getElementById('mask').dataset.content = value;
            /** 
             * Animate the circle
             **/
            var rotation = (180 - (value * 1.8));
            for (i in transform_styles) {
                document.getElementById('fill').style[transform_styles[i]] =
                'rotate(' + rotation * -1 + 'deg)';
            }
        }

        return {'setProgress':setProgress};

    };

  
//})(window,document);

/**
 * Usage - Call the setProgress function from you data source
 **/
var newProgressBar = new Css3ProgressBar('container1'); 
document.getElementById('percentValue').addEventListener('keyup', function() {
    newProgressBar.setProgress(this.value);
}, false);


