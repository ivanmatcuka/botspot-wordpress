import { MuiIcons } from '@botspot/ui';
import { StandaloneButton as Button } from '@botspot/ui/standalone';
import { BlockControls } from '@wordpress/block-editor';
import { DropdownMenu } from '@wordpress/components';
import { ComponentProps, useState } from 'react';

import Editor from '../Editor';
import { BlockMetadata } from '../types';
import blockConfig from './block.json';

type IconNames = keyof typeof MuiIcons;
type ButtonProps = ComponentProps<typeof Button>;
export default function Edit(props: {
  attributes: ButtonProps;
  setAttributes: (updated: Partial<ButtonProps>) => void;
}) {
  const iconNames: IconNames[] = [
    'Twitter',
    'Facebook',
    'LinkedIn',
    'X',
    'Instagram',
  ];

  const [iconName, setIconName] = useState<IconNames | null>(null);
  const IconClass = iconName ? MuiIcons[iconName] : null;

  return (
    <Editor {...props} config={blockConfig as BlockMetadata}>
      <BlockControls>
        <DropdownMenu
          controls={iconNames.map((option) => ({
            isActive: iconName === option,
            title: option,
            onClick: () => setIconName(option),
          }))}
          label={iconName ?? ''}
        />
      </BlockControls>
      <Button
        {...props.attributes}
        onClick={(e) => e.preventDefault()}
        startIcon={IconClass ? <IconClass /> : undefined}
      />
    </Editor>
  );
}
