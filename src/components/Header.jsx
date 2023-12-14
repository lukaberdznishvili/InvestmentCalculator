import pic from '../assets/investment-calculator-logo.png';
export default function Header(){
    return(
        <header id='header'>
            <img  src={pic} alt=""/>
            <h1>Investment Calculator</h1>
        </header>
    )
};