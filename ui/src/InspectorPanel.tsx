import {
  DropdownMenu,
  Flex,
  Panel,
  PanelBody,
  PanelRow,
  __experimentalText as Text,
  TextControl,
  ToggleControl,
} from '@wordpress/components';
import { JsonEditor } from 'json-edit-react';

import { BlockMetadata, GenericComponentProps } from './types';

export type DynamicBlockSettingsPanelProps<A> = {
  attributes: A;
  configAttributes: NonNullable<BlockMetadata['attributes']>;
  setAttributes: (updated: Partial<A>) => void;
};
export function DynamicBlockSettingsPanel<A extends GenericComponentProps>({
  attributes,
  configAttributes,
  setAttributes,
}: DynamicBlockSettingsPanelProps<A>) {
  const onChange = (key: string, option: A[string]) => {
    setAttributes({
      [key]: option,
    } as A);
  };

  return (
    <Panel header="Properties">
      {Object.entries(configAttributes).map(([key, attrConfig]) => {
        const value = attributes[key] as string | number | boolean;
        const label = attrConfig.name || key;
        const description = attrConfig.description || key;
        const controlType = attrConfig.type;

        let input;

        switch (controlType) {
          case 'string':
            if (attrConfig.enum) {
              input = (
                <>
                  <Text>{value}</Text>
                  <DropdownMenu
                    controls={attrConfig.enum.map((option) => ({
                      isActive: value === option,
                      title: option,
                      onClick: () => onChange(key, option as A[string]),
                    }))}
                    label={label}
                  />
                </>
              );
              break;
            }
            input = (
              <TextControl
                onChange={(val) => onChange(key, val as A[string])}
                value={String(value)}
              />
            );
            break;
          case 'boolean':
            input = (
              <ToggleControl
                checked={!!value}
                label={!!value ? 'true' : 'false'}
                onChange={(val) => onChange(key, val as A[string])}
              />
            );
            break;
          case 'number':
            input = (
              <TextControl
                label={label}
                onChange={(val) => onChange(key, val as A[string])}
                type="number"
                value={parseInt(String(value))}
              />
            );
            break;
          case 'object':
            input = (
              <JsonEditor
                data={value}
                indent={2}
                onUpdate={(val) => onChange(key, val.newData as A[string])}
                rootFontSize={10}
                rootName="settings"
                restrictAdd
                restrictDelete
                restrictTypeSelection
              />
            );
        }

        return (
          <PanelBody initialOpen={true} key={key} title={label}>
            <PanelRow>
              <Flex direction="column">
                <Text>{description}</Text>
                <Flex>{input}</Flex>
              </Flex>
            </PanelRow>
          </PanelBody>
        );
      })}
    </Panel>
  );
}
