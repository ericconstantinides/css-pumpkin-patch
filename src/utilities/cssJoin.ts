export interface CssModule {
  [key: string]: string
}

/**
 * cssJoin Adds multiple classes to multiple styles
 * cssJoin joins classNames to CSS style files
 *
 * @param {String} classesStr A string of className[s] in the css file[s]
 * @param {Object[s]} cssFiles as many css files as objects that may contain the classname
 *
 * usage:
 * className={cssJoin('bear red bear__foot', bearStyles, colors)}
 */

export const cssJoin = (classesStr: string, ...cssFiles: CssModule[]): string => {
  return classesStr
    .split(' ')
    .map((className) =>
      cssFiles
        .map((style) => style[className])
        .filter((e) => e)
        .join(' ')
    )
    .join(' ')
}

/**
 * cssJoinFactory creates a function with your styles files baked in so there's no need to explicitly send the styles every time your run cssJoin
 * @param {object[s]} cssFiles takes in as many css Modules files as you need
 *
 * usage:
 * const cj = cssJoinFactory(bearStyles, colors)
 * ...
 * className={cj('bear red bear__foot')}
 */
export const cssJoinFactory = (...cssFiles: CssModule[]) => (
  classesStr: string,
  ...alternateCssFiles: CssModule[]
): string => {
  return cssJoin(
    classesStr,
    ...(alternateCssFiles && alternateCssFiles.length > 0 ? alternateCssFiles : cssFiles)
  )
}
