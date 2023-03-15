import React, { useEffect, useState, useCallback } from 'react';
import { SchemaForm, SchemaMarkupField as Field, FormSlot } from '@formily/next';
import { Input, Radio } from '@formily/next-components';
import { TreeSelect, Select, Divider, Icon, Checkbox, Balloon } from '@alifd/next';
import { cloneDeep } from 'lodash';
import '@alifd/next/dist/next.css';
// import 'antd/dist/antd.css';
import './index.scss';
import { serviceRadioGroupDataSource } from './CONST';
import { globalMethodsList, selectedServiceList } from './utils/mock';

const { Group: CheckboxGroup } = Checkbox;
// 注册组件
const components = {
  Input,
  TreeSelect,
  Select,
  CheckboxGroup: Checkbox.Group,
  RadioGroup: Radio.Group,
};

export default function App() {
  const [isHSF, setIsHSF] = useState(false);

  const serviceItemHandleClick = (item, index) => {};

  const radioGroupHandleChange = (value) => {
    const data = value === 'HSF';
    setIsHSF(data);
  };
  return (
    <div className="service-form">
      <div className="select-top">
        <SchemaForm inline components={components}>
          <Field
            name="feature"
            title="选择能力"
            required
            x-component="TreeSelect"
            x-component-props={{
              // size: 'small',
              placeholder: '选择能力',
              style: { width: '200px' },
            }}
          ></Field>
          <FormSlot>
            <Divider direction="ver" />
          </FormSlot>
          <Field
            name="serviceType"
            title="服务来源"
            type="string"
            required
            x-component="RadioGroup"
            x-component-props={{
              onChange: radioGroupHandleChange,
              style: { width: '100%' },
            }}
            enum={serviceRadioGroupDataSource}
          />
          <FormSlot>
            <Divider direction="ver" />
          </FormSlot>
          {isHSF ? (
            <Field
              name="serviceName"
              title="服务1"
              type="string"
              required
              x-component="Select"
              x-component-props={{
                placeholder: '请输入HSF服务',
                style: { width: '100%' },
              }}
            />
          ) : (
            <Field
              name="serviceName"
              title="服务2"
              type="string"
              required
              x-component="Select"
              x-component-props={{
                placeholder: '请输入NBF服务',
                style: { width: '100%' },
              }}
            />
          )}
        </SchemaForm>
      </div>
      <div className="select-con">
        <div className="form-left">
          <p>已添加的服务</p>
          <div className="service-con">
            <div className="service-list">
              {selectedServiceList.map((item, index) => {
                return (
                  <div
                    className="selected-service-item"
                    key={item.value}
                    title={item.label}
                    onClick={(item, index) => serviceItemHandleClick(item, index)}
                  >
                    <div className="label">{item.label}</div>
                    <Icon className="icon" type="ashbin" size={'xs'}></Icon>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="form-right">
          <div className="service-message">
            <SchemaForm components={components} labelCol={3} wrapperCol={17}>
              <Field
                name="aa"
                title="服务名"
                x-component="Input"
                x-component-props={{ disabled: true }}
              ></Field>
              <Field name="bb" title="服务说明" x-component="Input"></Field>
              <Field
                name="cc"
                title="版本"
                x-component="Select"
                x-component-props={{
                  style: { width: '100%' },
                }}
              ></Field>
            </SchemaForm>
          </div>
          <div className="service-methods">
            <div className="global-methods">
              <div className="methods-list">
                <CheckboxGroup direction="ver">
                  {globalMethodsList.map((item, index) => (
                    <div className="method-item">
                      <Checkbox key={item.value} value={item.value}>
                        <Balloon
                          trigger={<span>{item.label}</span>}
                          align="r"
                          triggerType="hover"
                          closable={false}
                          needAdjust
                        >
                          {item.label}
                        </Balloon>
                      </Checkbox>
                      <div>
                        <Icon type="edit" size={'xs'}></Icon>
                      </div>
                    </div>
                  ))}
                </CheckboxGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
