function output (val){
    console.log(val);
}
function debounce(data){
    setTimeout(()=>{
        output(data)

    },2000)

}
debounce("input")