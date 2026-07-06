import React, { useState } from 'react';
import { createPassword } from '../services/passwordApis';

export default function AddCredentialForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
      website: "",
      username: "",
      password: ""
  });

  const handleChange=(e)=>{
    const {name, value}  = e.target
    setFormData((prev)=>({
      ...prev,
      [name]: value
    })
  )
  console.log(formData)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createPassword(formData)
    e.target.reset()


  };

  return (
    <section className="mb-stack-lg max-w-6xl mx-auto">
      <div className="glass-panel rounded-lg p-container-padding">
        <div className="font-label-caps text-label-caps text-primary mb-stack-md flex items-center gap-unit">
          <span className="material-symbols-outlined text-[14px]">add_circle</span>
          ADD NEW CREDENTIAL
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          <div className="md:col-span-3">
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-unit">WEBSITE / SERVICE</label>
            <div className="input-glass rounded flex items-center px-stack-sm h-10">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-unit">globe</span>
              <input onChange={(e)=>handleChange(e)} name='website' className="bg-transparent border-none text-on-surface font-code-lg text-code-lg w-full focus:ring-0 placeholder-surface-variant p-0" placeholder="github.com" type="text" />
            </div>
          </div>
          <div className="md:col-span-3">
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-unit">USERNAME</label>
            <div className="input-glass rounded flex items-center px-stack-sm h-10">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-unit">person</span>
              <input onChange={(e)=>handleChange(e)} name='username' className="bg-transparent border-none text-on-surface font-code-lg text-code-lg w-full focus:ring-0 placeholder-surface-variant p-0" placeholder="dev_root" type="text" />
            </div>
          </div>
          <div className="md:col-span-4 relative">
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-unit">PASSWORD</label>
            <div className="input-glass rounded flex items-center px-stack-sm h-10">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-unit">lock</span>
              <input 
                name='password'
                onChange={(e)=>handleChange(e)}
                className="bg-transparent border-none text-on-surface font-code-lg text-code-lg w-full focus:ring-0 placeholder-surface-variant p-0" 
                placeholder="••••••••" 
                type={showPassword ? "text" : "password"} 
              />
              <button 
                className="text-on-surface-variant hover:text-primary transition-colors ml-auto focus:outline-none" 
                onClick={() => setShowPassword(!showPassword)} 
                type="button"
              >
                <span className="material-symbols-outlined text-sm">{showPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-2">
            <button className="w-full h-10 bg-primary-container text-on-primary-fixed hover:bg-primary transition-colors font-code-lg text-code-lg rounded flex justify-center items-center" type="submit">
              Save Password
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
