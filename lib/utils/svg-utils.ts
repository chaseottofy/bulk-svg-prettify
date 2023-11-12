import { IRegexes } from '../types';

export const regexes: IRegexes = {
  matchAttr: /\w+=/g,
  matchValues: /"([^"]*)"/g,
  matchCarriageNewlineTab: /[\t\n\r]/g,
  matchSpacesGreaterThanOne: /\s{2,}/g,
  matchBackslash: /\\/g,
  matchSVGTags: /<svg[\S\s]*?<\/svg>/g,
};

// export const formatJSONSvg = (svg:string): string => {
export function formatJSONSvg(svg: string): string {
  return svg
    .trim()
    .replaceAll(regexes.matchCarriageNewlineTab, '')
    .replaceAll(regexes.matchSpacesGreaterThanOne, '')
    .replaceAll(regexes.matchBackslash, '');
}

export const removeIfEmpty: Set<string> = new Set([
  'title',
  'altGlyph',
  'altGlyphDef',
  'altGlyphItem',
  'glyph',
  'glyphRef',
  'textPath',
  'text',
  'tref',
  'tspan',
  'pre',
  'style',
]);
