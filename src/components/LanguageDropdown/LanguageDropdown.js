import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './LanguageDropdown.css';


function LanguageDropdown() {
    return (
        <div class="language-dropdown">
            <div class="position-relative">
                <DropdownButton
                    variant="outline-secondary"
                    title="Az"
                    id="input-group-dropdown-2"
                    align="end"
                >
                    <Dropdown.Item href="#">AZ</Dropdown.Item>
                    <Dropdown.Item href="#">EN</Dropdown.Item>
                    <Dropdown.Item href="#">RU</Dropdown.Item>
                </DropdownButton>
                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5251 5.99999C5.42128 6.00056 5.31837 5.98165 5.22226 5.94434C5.12615 5.90704 5.03873 5.85207 4.96502 5.7826L0.231991 1.28491C0.0834497 1.14375 0 0.952306 0 0.752682C0 0.553059 0.0834497 0.361611 0.231991 0.220456C0.380532 0.0793003 0.581997 0 0.792066 0C1.00214 0 1.2036 0.0793003 1.35214 0.220456L5.5251 4.19342L9.69806 0.227952C9.84896 0.105145 10.0431 0.0409732 10.2416 0.0482603C10.4401 0.0555475 10.6285 0.133757 10.769 0.267259C10.9094 0.400762 10.9917 0.579724 10.9994 0.768384C11.0071 0.957044 10.9396 1.14151 10.8103 1.28491L6.07729 5.7826C5.93036 5.92109 5.73204 5.99916 5.5251 5.99999Z" fill="white"/>
                </svg>
            </div>
        </div>
    );
}

export default LanguageDropdown;