var uiSettings = new Windows.UI.ViewManagement.UISettings();

function setColorMode() {
  var color = uiSettings.getColorValue( Windows.UI.ViewManagement.UIColorType.background );
  if ( color.r == 0 && color.g == 0 && color.b == 0 )
  {
    document.body.className = 'dark';
  }
  else
  {
    document.body.className = 'light';
  }
}

uiSettings.addEventListener( 'colorValuesChanged', setColorMode );

getColorMode();