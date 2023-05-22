import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './login.css';
import logo from '../../assets/images/Logo.png';

export default function Login() {
  return (
    <div>  
      <div className="card">
          <img src={logo} alt='logo ecommerce' className='logo'/>
          <div className="flex flex-column md:flex-row">
              <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5">
                  <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                      <label htmlFor="username" className="w-6rem">
                          Username
                      </label>
                      <InputText id="username" type="text" />
                  </div>
                  <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                      <label htmlFor="password" className="w-6rem">
                          Password
                      </label>
                      <InputText id="password" type="password" />
                  </div>
                  <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
              </div>
              <div className="w-full md:w-2">
                  <Divider layout="vertical" className="hidden md:flex">
                      <b>OR</b>
                  </Divider>
              </div>
              <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                  <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
              </div>
          </div>
      </div>
    </div>  
  )
}