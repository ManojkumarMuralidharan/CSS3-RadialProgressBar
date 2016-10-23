# CSS3-RadialProgressBar

A CSS3 based radial progress bar

![CSS3 ProgressBar](https://github.com/ManojkumarMuralidharan/CSS3-RadialProgressBar/blob/master/images/image.png?raw=true "CSS3 ProgressBar")

## Installation 
1. Make sure you include the progress bar template
2.  Create a new container in the DOM
3. Create a new instance of the progress bar
    ```javascript
    var newProgressBar = new Css3ProgressBar('container1');
4. Call the setProgress function to set its progress 
    ```javascript
    document.getElementById('percentValue').addEventListener('keyup', function() {
        newProgressBar.setProgress(this.value);
    }, false);

##  Todo
1. Create closure to make each module deal with its own mask and fill
2. Add configuration to modify colors

[This project was inspired from a colleague of mine and this post by Anders Ingemann](https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9#.6bjwej9v3 )