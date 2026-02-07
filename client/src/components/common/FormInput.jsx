/**
 * Composant de champ de formulaire réutilisable
 */
import React from 'react';

/**
 * Champ de formulaire avec label
 * @param {Object} props - Props du composant
 * @param {string} props.label - Label du champ
 * @param {string} props.type - Type d'input
 * @param {string} props.value - Valeur du champ
 * @param {Function} props.onChange - Fonction de changement
 * @param {boolean} props.required - Champ requis
 * @param {string} props.placeholder - Placeholder
 */
/**
 * Composant de champ de formulaire réutilisable
 * @param {Object} props - Propriétés du composant
 */
const FormInput = ({
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '',
  ...props
}) => {
  return (
    <div className="form-group animate-fade-in">
      {label && <label>{label}{required && <span className="gold"> *</span>}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        autoComplete="off"
        {...props}
      />
    </div>
  );
};

export default FormInput;
