let path = window.location.href;
var initialLayout = path.substring(path.indexOf(".com")+5);

if(!initialLayout){
	initialLayout = "dvorak";
}
