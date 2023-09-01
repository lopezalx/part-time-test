const colorSwitch = document.getElementById('input-color-switch');

colorSwitch.addEventListener('click', checkMode);

function checkMode() 
{
  if(colorSwitch.checked) 
  {
    console.log('light on')
    lightModeOn();
  }
  else 
  {
    console.log('light off')
    lightModeOff();
  }
}

function lightModeOn()
{
    document.body.classList.add("light-mode");
}

function lightModeOff()
{
    document.body.classList.remove("light-mode");
}