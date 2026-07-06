import React, { useEffect, useState } from 'react';
import { deletePassword, getPassword, updatePassword } from '../services/passwordApis';

function EditModal({ item, onClose, onSave }) {
  const [formData, setFormData] = useState({ ...item });
  const [showPassword, setShowPassword] = useState(false);

  
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
        updatePassword(item.id, formData)
        onClose()
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-md rounded-lg p-container-padding shadow-2xl border border-outline-variant bg-surface/80">
        <h3 className="font-title-sm text-title-sm text-on-surface mb-stack-md flex items-center gap-unit">
          <span className="material-symbols-outlined text-[18px] text-primary">edit_square</span>
          Edit Credential
        </h3>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md">
          <div>
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-unit">SERVICE</label>
            <div className="input-glass rounded flex items-center px-stack-sm h-10">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-unit">globe</span>
              <input 
                name="service"
                value={formData.website}
                onChange={handleChange}
                className="bg-transparent border-none text-on-surface font-code-lg text-code-lg w-full focus:ring-0 placeholder-surface-variant p-0" 
                type="text" 
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-unit">USERNAME</label>
            <div className="input-glass rounded flex items-center px-stack-sm h-10">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-unit">person</span>
              <input 
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="bg-transparent border-none text-on-surface font-code-lg text-code-lg w-full focus:ring-0 placeholder-surface-variant p-0" 
                type="text" 
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-unit">PASSWORD</label>
            <div className="input-glass rounded flex items-center px-stack-sm h-10">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-unit">lock</span>
              <input 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-transparent border-none text-on-surface font-code-lg text-code-lg w-full focus:ring-0 placeholder-surface-variant p-0" 
                type={showPassword ? "text" : "password"} 
                required
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

          <div className="flex justify-end gap-stack-sm mt-stack-sm">
            <button 
              type="button" 
              onClick={onClose}
              className="px-gutter h-10 rounded font-code-lg text-code-lg text-on-surface-variant hover:bg-surface-container-highest transition-colors focus:outline-none"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-gutter h-10 bg-primary-container text-on-primary-fixed hover:bg-primary transition-colors font-code-lg text-code-lg rounded flex justify-center items-center focus:outline-none"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function PasswordTable() {
  const [passwords, setPasswords] = useState([]);
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  

  const handleDeletePassword=(id)=>{
    deletePassword(id)
  }

  useEffect(()=>{
    
    getPassword()
    .then((res)=>{
      setPasswords(res.data.message)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [handleDeletePassword])

  const toggleVisibility = (id) => {
    setVisiblePasswords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  const handleEditSave = (updatedItem) => {
    setEditingItem(null);
  };



  return (
    <>
      <section className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-stack-md">
          <h2 className="font-title-sm text-title-sm text-on-surface">Saved Passwords</h2>
          <div className="bg-surface-container-low rounded-full px-stack-sm py-unit flex items-center gap-unit border border-outline-variant">
            <span className="material-symbols-outlined text-sm text-on-surface-variant">search</span>
            <input className="bg-transparent border-none text-on-surface font-body-sm text-body-sm focus:ring-0 p-0 w-32 placeholder-surface-variant" placeholder="Filter..." type="text" />
          </div>
        </div>
        <div className="glass-panel rounded-lg overflow-hidden border border-outline-variant">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low">
                <th className="py-stack-sm px-gutter font-label-caps text-label-caps text-on-surface-variant w-1/3">SERVICE</th>
                <th className="py-stack-sm px-gutter font-label-caps text-label-caps text-on-surface-variant w-1/4">USERNAME</th>
                <th className="py-stack-sm px-gutter font-label-caps text-label-caps text-on-surface-variant w-1/4">PASSWORD</th>
                <th className="py-stack-sm px-gutter font-label-caps text-label-caps text-on-surface-variant text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="font-code-lg text-code-lg text-on-surface">
              {passwords.map(item => {
                const isVisible = visiblePasswords[item.id];
                const maskedPassword = '•'.repeat(Math.min(item.password.length, 12));
                
                return (
                  <tr key={item.id} className="border-b border-outline-variant hover:bg-[#2e2e2e] transition-colors group">
                    <td className="py-stack-sm px-gutter flex items-center gap-stack-sm">
                      <div className="w-6 h-6 rounded bg-surface-container flex items-center justify-center border border-outline-variant text-secondary">
                        <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
                      </div>
                      {item.website}
                    </td>
                    <td className="py-stack-sm px-gutter text-secondary">{item.username}</td>
                    <td className={`py-stack-sm px-gutter ${isVisible ? 'text-primary' : 'text-secondary'}`}>
                      {isVisible ? item.password : maskedPassword}
                    </td>
                    <td className="py-stack-sm px-gutter text-right">
                      <div className="flex items-center justify-end gap-stack-sm opacity-50 group-hover:opacity-100 transition-opacity">
                        <button aria-label="View" className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none" onClick={() => toggleVisibility(item.id)}>
                          <span className="material-symbols-outlined text-sm">{isVisible ? 'visibility_off' : 'visibility'}</span>
                        </button>
                        <div className={`tooltip-custom ${copiedId === item.id ? 'show-tooltip' : ''}`}>
                          <button aria-label="Copy" className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none" onClick={() => copyToClipboard(item.password, item.id)}>
                            <span className="material-symbols-outlined text-sm">content_copy</span>
                          </button>
                          <span className="tooltiptext">Copied!</span>
                        </div>
                        <button 
                          aria-label="Edit" 
                          className="text-on-surface-variant hover:text-secondary transition-colors focus:outline-none"
                          onClick={() => setEditingItem(item)}
                        >
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </button>
                        <button
                        onClick={() => handleDeletePassword(item.id)}
                        aria-label="Delete" className="text-on-surface-variant hover:text-error transition-colors focus:outline-none">
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {editingItem && (
        <EditModal 
          item={editingItem} 
          onClose={() => setEditingItem(null)} 
          onSave={handleEditSave} 
        />
      )}
    </>
  );
}
