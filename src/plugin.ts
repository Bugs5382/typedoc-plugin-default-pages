import {Application, ParameterType} from 'typedoc';

export function load(app: Application) {

  app.options.addDeclaration({
    name: "plugin-option",
    help: "Displayed when --help is passed",
    type: ParameterType.String, // The default
    defaultValue: "", // The default
  });

}