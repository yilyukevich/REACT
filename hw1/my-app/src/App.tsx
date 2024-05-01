import Circle from './components/Circle/Circle'
import Label from './components/Label/Label'
import MaterialSymbol from './components/MaterialSymbol/MaterialSymbol'
import Panel from './components/Panel/Panel'
import Title from './components/Title/Title'
import Image from './components/Image/Image'
import GreyPanel from './components/GreyPanel/GreyPanel'
import Button from './components/Button/Button'
import Line from './components/Line/Line'

function App() {

  return (
    <div>
      <Title value="Typography:" />
      <Label tagName={'h2'} value={'OPEN SANS'} />
      <Label tagName={'h3'} value={'OPEN SANS'} />
      <Label tagName={'h4'} value={'OPEN SANS'} />
      <Label tagName={'h5'} value={'OPEN SANS'} />
      <Label tagName={'h1'} value={'RALEWAY'} />
      <Label tagName={'h3'} value={'RALEWAY'} />
      <Label tagName={'h5'} value={'RALEWAY'} />
      <Title value='Colors:' />
      <Panel>
        <Circle color='black' />
        <Circle color='red' />
        <Circle color='grey' />
        <Circle color='brown' />
        <Circle color='black' />
      </Panel>
      <Title value='Icons:' />
      <Panel>
        <MaterialSymbol value='emoji_objects' />
        <MaterialSymbol value='keyboard_alt' />
        <MaterialSymbol value='flash_on' />
      </Panel>
      <Image src='/src/images/panel_img.png' />
      <Title value='Buttons:' />
      <GreyPanel>
        <Button value='Download' />
      </GreyPanel>
      <Title value='Styling elements:' />
      <GreyPanel>
        <Line color='blue' />
        <Line color='red' />
      </GreyPanel>
    </div>
  )
}

export default App
