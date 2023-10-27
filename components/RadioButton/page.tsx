interface RadioProps {
    label: string;
    name: string;
    isFlexRow: boolean;
    isRounded?: boolean;
    isChecked: boolean;
    readonly?: boolean;
    onChange: (isChecked: boolean) => void;
  }
  
export default function RadioButton(props: RadioProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.checked);
      };
    
  return (
    <div className={props.isFlexRow === true ? 'flex gap-2 flex-row ' : 'flex gap-2 flex-col'}>
      <input
        type="radio"
        name={props.name}
        checked={props.isChecked}
        onChange={handleChange}
        readOnly={props.readonly}
        className="accent-blue-500"
      />
      <label
        className="text-sm text-slate-400 whitespace-nowrap"
      >
        {props.label}
      </label>
    </div>
  );
}
