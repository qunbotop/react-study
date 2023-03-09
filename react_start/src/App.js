import React, { useEffect, useState, useCallback } from 'react';
import { SchemaForm, SchemaMarkupField as Field } from '@formily/next';
import { Checkbox, Input, Radio } from '@formily/next-components';
import { TreeSelect, Select } from '@alifd/next';
import { cloneDeep } from 'lodash';
import '@alifd/next/dist/next.css';
import 'antd/dist/antd.css';

// 注册组件
const components = {
  Input,
  TreeSelect,
  Select,
  CheckboxGroup: Checkbox.Group,
  RadioGroup: Radio.Group,
};
export default App = () => {
  return <></>;
};
