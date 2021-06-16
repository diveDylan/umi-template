import * as React from 'react';
import { useState, useEffect } from 'react';
// @ts-ignore
const Containner = React.lazy(() => import('commonComponents')).ContentWrapper


export default function ModuleFederation() {
  return <Containner>
    测试模块联邦
  </Containner>
}
