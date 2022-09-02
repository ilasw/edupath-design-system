import {FC, KeyboardEventHandler, useState} from "react";
import Button, {ButtonProps} from "../../atoms/button/button";
import {FocusScope} from '@react-aria/focus';

type DropdownProps = {
  value: string,
  onSelected: (value: string) => void,
  items: ButtonProps[]
}

export const Dropdown: FC<DropdownProps> = props => {

  const {value, onSelected} = props
  const [isOpen, setIsOpen] = useState(false);

  const keyDownHandler: KeyboardEventHandler<HTMLUListElement> = (e) => {
    switch (e.key) {
      case 'Escape':
        setIsOpen(false);
        return;
    }
  }

  const selectElement = (value: string) => {
    onSelected(value);
    setIsOpen(false);
  }

  return <div className={'Dropdown relative'}>
    <Button onClick={() => setIsOpen((oldVal) => !oldVal)}
            variant={value ? 'primary' : 'secondary'}
    >{value ?? 'Open dropdown'}</Button>
    {isOpen && (
        <FocusScope contain restoreFocus autoFocus>
          <ul className="absolute top-full left-0 bg-neutral-50 rounded-xl mt-2 border border-b-neutral-500 overflow-hidden"
              onKeyDown={e => keyDownHandler(e)}>
            {[1, 2, 3].map((num) => (
                <li className={'border-b border-b-neutral-500 last:border-b-0 block'}
                    key={num}>
                  <Button
                      className={'block w-full bg-neutral-50 hover:bg-neutral-200 text-neutral-700 rounded-none border-0'}
                      onClick={() => selectElement(`Button ${num}`)}
                  >Button {num}</Button></li>
            ))}
          </ul>
        </FocusScope>
    )}
  </div>
}