import { describe, expect, test } from '@jest/globals';

import fs from 'fs';
import path from 'path';
import * as svgParser from 'svg-parser';
import treeToSvg from '../lib/core/tree-to-svg';

import {
  testSvgAfter1,
} from './test.mocks';

describe('tree-to-svg', () => {
  test('Should format empty title', () => {
    const svgBeforePath = path.resolve(__dirname, './test-svg1-before.svg');
    const svgBefore = fs.readFileSync(svgBeforePath, 'utf8') as string;
    const svgBeforeTree = treeToSvg(svgParser.parse(svgBefore));
    expect(svgBeforeTree.toString()).toEqual(testSvgAfter1);
  });
});