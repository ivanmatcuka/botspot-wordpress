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

export type DynamicBlockSettingsPanelProps<
  T extends Record<string, string>,
  C extends Record<string, string>,
> = {
  attributes: T;
  config: C;
  setAttributes: (updated: Partial<T>) => void;
};
export function DynamicBlockSettingsPanel<
  T extends Record<string, any>,
  C extends Record<string, any>,
>({ attributes, config, setAttributes }: DynamicBlockSettingsPanelProps<T, C>) {
  return (
    <Panel header="Properties">
      {Object.entries(config).map(([key, attrConfig]) => {
        const value = attributes[key];
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
                    controls={attrConfig.enum.map((option: string) => ({
                      isActive: value === option,
                      title: option,
                      onClick: () =>
                        setAttributes({
                          [key]: option,
                        } as Partial<T>),
                    }))}
                    label={label}
                  />
                </>
              );
              break;
            }
            input = (
              <TextControl
                onChange={(val) =>
                  setAttributes({
                    [key]: val,
                  } as Partial<T>)
                }
                value={value || ''}
              />
            );
            break;
          case 'boolean':
            input = (
              <ToggleControl
                onChange={(val) =>
                  setAttributes({
                    [key]: val,
                  } as Partial<T>)
                }
                checked={!!value}
                label={!!value ? 'true' : 'false'}
              />
            );
            break;
          case 'number':
            input = (
              <TextControl
                onChange={(val) =>
                  setAttributes({
                    [key]: val ? Number(val) : undefined,
                  } as Partial<T>)
                }
                label={label}
                type="number"
                value={value || ''}
              />
            );
            break;
          case 'object':
            input = (
              <JsonEditor
                onUpdate={(val) =>
                  setAttributes({
                    [key]: val.newData,
                  } as Partial<T>)
                }
                data={value}
                indent={2}
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
