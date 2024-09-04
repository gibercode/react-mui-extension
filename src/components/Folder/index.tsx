import React, { FC } from 'react';
import './styles.module.scss';
import { Icon } from '@iconify/react';

interface FolderComponentProps {
  text: string;
  borderColor: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export const FolderComponent: FC<FolderComponentProps> = ({ text, borderColor, backgroundColor, children }) => {
  return (
    <div className='boxContainer'>
      <div className='infoContainer'>
        <div style={{ position: 'relative' }}>
          <div className='infoTooltip'>
            <p>Info</p>
          </div>
        </div>

        <Icon icon='mdi:information-outline' cursor={'pointer'} width={10} color={'#5E83FD'} />
      </div>
      <div
        className='box'
        style={{ '--before-bg-color': borderColor, '--after-bg-color': backgroundColor } as React.CSSProperties}>
        <p className='title' style={{ color: borderColor }}>
          {text}
        </p>
        <div className='childrenContainerOne'>{children}</div>
      </div>
    </div>
  );
};
