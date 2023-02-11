
function update(){
    const screenWidth = document.documentElement.scrollWidth;
    var range = document.getElementById('rangeLeft');
    var sliderThumb = document.getElementById('sliderThumb');
    document.getElementById('used').innerHTML = range.value;
    document.getElementById('left').innerHTML = range.max - range.value;
    //var value = (range.value-range.min)/(range.max-range.min)*100
    if(screenWidth <= 400)
    {
        var value2 = range.value/280;
        var value = (range.value/10) + 6;
    }
    else{
        var value2 = range.value/280; //than more, them little
        var value = (range.value/10) + 4;
    }
    //sliderThumb.style.background = 'linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ' + value + '%, #fff ' + value + '%, #fff 100%)'
    sliderThumb.style.width = '' + (value - value2) + '%';

}