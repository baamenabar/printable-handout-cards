/**
 * returns the full QA data-attribute selector for a given id
 * @param id value used as unique qa data attr.
 */
export function qaDataAttrSelector(id: string = ''): string {
    return `[data-automationid="${id}"]`;
}
