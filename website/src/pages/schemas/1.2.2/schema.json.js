// Run `BIOME_VERSION=<version number> cargo codegen-website
// to generate a new schema
export function GET() {
	const schema = {
		$schema: "http://json-schema.org/draft-07/schema#",
		title: "Configuration",
		description:
			"The configuration that is contained inside the file `biome.json`",
		type: "object",
		properties: {
			$schema: {
				description:
					"A field for the [JSON schema](https://json-schema.org/) specification",
				type: ["string", "null"],
			},
			extends: {
				description:
					"A list of paths to other JSON files, used to extends the current configuration.",
				anyOf: [{ $ref: "#/definitions/StringSet" }, { type: "null" }],
			},
			files: {
				description: "The configuration of the filesystem",
				anyOf: [{ $ref: "#/definitions/FilesConfiguration" }, { type: "null" }],
			},
			formatter: {
				description: "The configuration of the formatter",
				anyOf: [
					{ $ref: "#/definitions/FormatterConfiguration" },
					{ type: "null" },
				],
			},
			javascript: {
				description: "Specific configuration for the JavaScript language",
				anyOf: [
					{ $ref: "#/definitions/JavascriptConfiguration" },
					{ type: "null" },
				],
			},
			json: {
				description: "Specific configuration for the Json language",
				anyOf: [{ $ref: "#/definitions/JsonConfiguration" }, { type: "null" }],
			},
			linter: {
				description: "The configuration for the linter",
				anyOf: [
					{ $ref: "#/definitions/LinterConfiguration" },
					{ type: "null" },
				],
			},
			organizeImports: {
				description: "The configuration of the import sorting",
				anyOf: [{ $ref: "#/definitions/OrganizeImports" }, { type: "null" }],
			},
			vcs: {
				description: "The configuration of the VCS integration",
				anyOf: [{ $ref: "#/definitions/VcsConfiguration" }, { type: "null" }],
			},
		},
		additionalProperties: false,
		definitions: {
			A11y: {
				description: "A list of rules that belong to this group",
				type: "object",
				properties: {
					all: {
						description: "It enables ALL rules for this group.",
						type: ["boolean", "null"],
					},
					noAccessKey: {
						description:
							"Enforce that the accessKey attribute is not used on any HTML element.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noAriaUnsupportedElements: {
						description:
							"Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noAutofocus: {
						description: "Enforce that autoFocus prop is not used on elements.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noBlankTarget: {
						description:
							'Disallow target="_blank" attribute without rel="noreferrer"',
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noDistractingElements: {
						description: "Enforces that no distracting elements are used.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noHeaderScope: {
						description: "The scope prop should be used only on <th> elements.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noNoninteractiveElementToInteractiveRole: {
						description:
							"Enforce that interactive ARIA roles are not assigned to non-interactive HTML elements.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noNoninteractiveTabindex: {
						description:
							"Enforce that tabIndex is not assigned to non-interactive HTML elements.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noPositiveTabindex: {
						description:
							"Prevent the usage of positive integers on tabIndex property",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noRedundantAlt: {
						description:
							'Enforce img alt prop does not contain the word "image", "picture", or "photo".',
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noRedundantRoles: {
						description:
							"Enforce explicit role property is not the same as implicit/default role property on an element.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noSvgWithoutTitle: {
						description:
							"Enforces the usage of the title element for the svg element.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					recommended: {
						description: "It enables the recommended rules for this group",
						type: ["boolean", "null"],
					},
					useAltText: {
						description:
							"Enforce that all elements that require alternative text have meaningful information to relay back to the end user.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useAnchorContent: {
						description:
							"Enforce that anchors have content and that the content is accessible to screen readers.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useAriaPropsForRole: {
						description:
							"Enforce that elements with ARIA roles must have all required ARIA attributes for that role.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useButtonType: {
						description:
							"Enforces the usage of the attribute type for the element button",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useHeadingContent: {
						description:
							"Enforce that heading elements (h1, h2, etc.) have content and that the content is accessible to screen readers. Accessible means that it is not hidden using the aria-hidden prop.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useHtmlLang: {
						description: "Enforce that html element has lang attribute.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useIframeTitle: {
						description:
							"Enforces the usage of the attribute title for the element iframe.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useKeyWithClickEvents: {
						description:
							"Enforce onClick is accompanied by at least one of the following: onKeyUp, onKeyDown, onKeyPress.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useKeyWithMouseEvents: {
						description:
							"Enforce onMouseOver / onMouseOut are accompanied by onFocus / onBlur.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useMediaCaption: {
						description:
							"Enforces that audio and video elements must have a track for captions.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useValidAnchor: {
						description:
							"Enforce that all anchors are valid, and they are navigable elements.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useValidAriaProps: {
						description: "Ensures that ARIA properties aria-* are all valid.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useValidAriaValues: {
						description:
							"Enforce that ARIA state and property values are valid.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useValidLang: {
						description:
							"Ensure that the attribute passed to the lang attribute is a correct ISO language and/or country.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
				},
			},
			ArrowParentheses: { type: "string", enum: ["always", "asNeeded"] },
			Complexity: {
				description: "A list of rules that belong to this group",
				type: "object",
				properties: {
					all: {
						description: "It enables ALL rules for this group.",
						type: ["boolean", "null"],
					},
					noBannedTypes: {
						description:
							"Disallow primitive type aliases and misleading types.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noExtraBooleanCast: {
						description: "Disallow unnecessary boolean casts",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noForEach: {
						description: "Prefer for...of statement instead of Array.forEach.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noMultipleSpacesInRegularExpressionLiterals: {
						description:
							"Disallow unclear usage of consecutive space characters in regular expression literals",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noStaticOnlyClass: {
						description:
							"This rule reports when a class has no non-static members, such as for a class used exclusively as a static namespace.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUselessCatch: {
						description: "Disallow unnecessary catch clauses.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUselessConstructor: {
						description: "Disallow unnecessary constructors.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUselessEmptyExport: {
						description:
							"Disallow empty exports that don't change anything in a module file.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUselessFragments: {
						description: "Disallow unnecessary fragments",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUselessLabel: {
						description: "Disallow unnecessary labels.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUselessRename: {
						description:
							"Disallow renaming import, export, and destructured assignments to the same name.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUselessSwitchCase: {
						description: "Disallow useless case in switch statements.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUselessThisAlias: {
						description: "Disallow useless this aliasing.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUselessTypeConstraint: {
						description: "Disallow using any or unknown as type constraint.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noWith: {
						description: "Disallow with statements in non-strict contexts.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					recommended: {
						description: "It enables the recommended rules for this group",
						type: ["boolean", "null"],
					},
					useFlatMap: {
						description:
							"Promotes the use of .flatMap() when map().flat() are used together.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useLiteralKeys: {
						description:
							"Enforce the usage of a literal access to properties over computed property access.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useOptionalChain: {
						description:
							"Enforce using concise optional chain instead of chained logical expressions.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useSimpleNumberKeys: {
						description:
							"Disallow number literal object member names which are not base10 or uses underscore as separator",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useSimplifiedLogicExpression: {
						description: "Discard redundant terms from logical expressions.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
				},
			},
			ComplexityOptions: {
				description: "Options for the rule `noNestedModuleImports`.",
				type: "object",
				required: ["maxAllowedComplexity"],
				properties: {
					maxAllowedComplexity: {
						description:
							"The maximum complexity score that we allow. Anything higher is considered excessive.",
						type: "integer",
						format: "uint8",
						minimum: 0.0,
					},
				},
				additionalProperties: false,
			},
			Correctness: {
				description: "A list of rules that belong to this group",
				type: "object",
				properties: {
					all: {
						description: "It enables ALL rules for this group.",
						type: ["boolean", "null"],
					},
					noChildrenProp: {
						description: "Prevent passing of children as props.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noConstAssign: {
						description:
							"Prevents from having const variables being re-assigned.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noConstantCondition: {
						description: "Disallow constant expressions in conditions",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noConstructorReturn: {
						description: "Disallow returning a value from a constructor.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noEmptyPattern: {
						description: "Disallows empty destructuring patterns.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noGlobalObjectCalls: {
						description:
							"Disallow calling global object properties as functions",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noInnerDeclarations: {
						description:
							"Disallow function and var declarations that are accessible outside their block.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noInvalidConstructorSuper: {
						description:
							"Prevents the incorrect use of super() inside classes. It also checks whether a call super() is missing from classes that extends other constructors.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noNewSymbol: {
						description: "Disallow new operators with the Symbol object.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noNonoctalDecimalEscape: {
						description:
							"Disallow \\8 and \\9 escape sequences in string literals.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noPrecisionLoss: {
						description: "Disallow literal numbers that lose precision",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noRenderReturnValue: {
						description:
							"Prevent the usage of the return value of React.render.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noSelfAssign: {
						description:
							"Disallow assignments where both sides are exactly the same.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noSetterReturn: {
						description: "Disallow returning a value from a setter",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noStringCaseMismatch: {
						description:
							"Disallow comparison of expressions modifying the string case with non-compliant value.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noSwitchDeclarations: {
						description: "Disallow lexical declarations in switch clauses.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUndeclaredVariables: {
						description:
							"Prevents the usage of variables that haven't been declared inside the document.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUnnecessaryContinue: {
						description: "Avoid using unnecessary continue.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUnreachable: {
						description: "Disallow unreachable code",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUnreachableSuper: {
						description:
							"Ensures the super() constructor is called exactly once on every code  path in a class constructor before this is accessed if the class has a superclass",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUnsafeFinally: {
						description: "Disallow control flow statements in finally blocks.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUnsafeOptionalChaining: {
						description:
							"Disallow the use of optional chaining in contexts where the undefined value is not allowed.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUnusedLabels: {
						description: "Disallow unused labels.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUnusedVariables: {
						description: "Disallow unused variables.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noVoidElementsWithChildren: {
						description:
							"This rules prevents void elements (AKA self-closing elements) from having children.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noVoidTypeReturn: {
						description:
							"Disallow returning a value from a function with the return type 'void'",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					recommended: {
						description: "It enables the recommended rules for this group",
						type: ["boolean", "null"],
					},
					useIsNan: {
						description: "Require calls to isNaN() when checking for NaN.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useValidForDirection: {
						description:
							'Enforce "for" loop update clause moving the counter in the right direction.',
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useYield: {
						description: "Require generator functions to contain yield.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
				},
			},
			EnumMemberCase: {
				description: "Supported cases for TypeScript `enum` member names.",
				oneOf: [
					{
						description: "PascalCase",
						type: "string",
						enum: ["PascalCase"],
					},
					{
						description: "CONSTANT_CASE",
						type: "string",
						enum: ["CONSTANT_CASE"],
					},
					{ description: "camelCase", type: "string", enum: ["camelCase"] },
				],
			},
			FilesConfiguration: {
				description: "The configuration of the filesystem",
				type: "object",
				properties: {
					ignore: {
						description:
							"A list of Unix shell style patterns. Biome will ignore files/folders that will match these patterns.",
						anyOf: [{ $ref: "#/definitions/StringSet" }, { type: "null" }],
					},
					ignoreUnknown: {
						description:
							"Tells Biome to not emit diagnostics when handling files that doesn't know",
						type: ["boolean", "null"],
					},
					include: {
						description:
							"A list of Unix shell style patterns. Biome will handle only those files/folders that will match these patterns.",
						anyOf: [{ $ref: "#/definitions/StringSet" }, { type: "null" }],
					},
					maxSize: {
						description:
							"The maximum allowed size for source code files in bytes. Files above this limit will be ignored for performance reasons. Defaults to 1 MiB",
						default: null,
						type: ["integer", "null"],
						format: "uint64",
						minimum: 1.0,
					},
				},
				additionalProperties: false,
			},
			FormatterConfiguration: {
				description: "Generic options applied to all files",
				type: "object",
				properties: {
					enabled: { default: true, type: ["boolean", "null"] },
					formatWithErrors: {
						description:
							"Stores whether formatting should be allowed to proceed if a given file has syntax errors",
						default: false,
						type: ["boolean", "null"],
					},
					ignore: {
						description:
							"A list of Unix shell style patterns. The formatter will ignore files/folders that will match these patterns.",
						anyOf: [{ $ref: "#/definitions/StringSet" }, { type: "null" }],
					},
					include: {
						description:
							"A list of Unix shell style patterns. The formatter will include files/folders that will match these patterns.",
						anyOf: [{ $ref: "#/definitions/StringSet" }, { type: "null" }],
					},
					indentSize: {
						description:
							"The size of the indentation, 2 by default (deprecated, use `indent-width`)",
						default: 2,
						type: ["integer", "null"],
						format: "uint8",
						minimum: 0.0,
					},
					indentStyle: {
						description: "The indent style.",
						default: "tab",
						anyOf: [
							{ $ref: "#/definitions/PlainIndentStyle" },
							{ type: "null" },
						],
					},
					indentWidth: {
						description: "The size of the indentation, 2 by default",
						default: 2,
						type: ["integer", "null"],
						format: "uint8",
						minimum: 0.0,
					},
					lineWidth: {
						description: "What's the max width of a line. Defaults to 80.",
						default: 80,
						anyOf: [{ $ref: "#/definitions/LineWidth" }, { type: "null" }],
					},
				},
				additionalProperties: false,
			},
			Hooks: {
				type: "object",
				required: ["name"],
				properties: {
					closureIndex: {
						description:
							'The "position" of the closure function, starting from zero.\n\n### Example',
						type: ["integer", "null"],
						format: "uint",
						minimum: 0.0,
					},
					dependenciesIndex: {
						description:
							'The "position" of the array of dependencies, starting from zero.',
						type: ["integer", "null"],
						format: "uint",
						minimum: 0.0,
					},
					name: { description: "The name of the hook", type: "string" },
				},
				additionalProperties: false,
			},
			HooksOptions: {
				description:
					"Options for the rule `useExhaustiveDependencies` and `useHookAtTopLevel`",
				type: "object",
				required: ["hooks"],
				properties: {
					hooks: {
						description: "List of safe hooks",
						type: "array",
						items: { $ref: "#/definitions/Hooks" },
					},
				},
				additionalProperties: false,
			},
			JavascriptConfiguration: {
				description: "A set of options applied to the JavaScript files",
				type: "object",
				properties: {
					formatter: {
						description: "Formatting options",
						anyOf: [
							{ $ref: "#/definitions/JavascriptFormatter" },
							{ type: "null" },
						],
					},
					globals: {
						description:
							"A list of global bindings that should be ignored by the analyzers\n\nIf defined here, they should not emit diagnostics.",
						anyOf: [{ $ref: "#/definitions/StringSet" }, { type: "null" }],
					},
					organize_imports: {
						anyOf: [
							{ $ref: "#/definitions/JavascriptOrganizeImports" },
							{ type: "null" },
						],
					},
					parser: {
						description: "Parsing options",
						anyOf: [
							{ $ref: "#/definitions/JavascriptParser" },
							{ type: "null" },
						],
					},
				},
				additionalProperties: false,
			},
			JavascriptFormatter: {
				description: "Formatting options specific to the JavaScript files",
				type: "object",
				properties: {
					arrowParentheses: {
						description:
							'Whether to add non-necessary parentheses to arrow functions. Defaults to "always".',
						anyOf: [
							{ $ref: "#/definitions/ArrowParentheses" },
							{ type: "null" },
						],
					},
					enabled: {
						description:
							"Control the formatter for JavaScript (and its super languages) files.",
						type: ["boolean", "null"],
					},
					indentSize: {
						description:
							"The size of the indentation applied to JavaScript (and its super languages) files. Default to 2.",
						type: ["integer", "null"],
						format: "uint8",
						minimum: 0.0,
					},
					indentStyle: {
						description:
							"The indent style applied to JavaScript (and its super languages) files.",
						anyOf: [
							{ $ref: "#/definitions/PlainIndentStyle" },
							{ type: "null" },
						],
					},
					indentWidth: {
						description:
							"The size of the indentation applied to JavaScript (and its super languages) files. Default to 2.",
						type: ["integer", "null"],
						format: "uint8",
						minimum: 0.0,
					},
					jsxQuoteStyle: {
						description: "The type of quotes used in JSX. Defaults to double.",
						anyOf: [{ $ref: "#/definitions/QuoteStyle" }, { type: "null" }],
					},
					lineWidth: {
						description:
							"What's the max width of a line, applied to JavaScript (and its super languages) files. Defaults to 80.",
						anyOf: [{ $ref: "#/definitions/LineWidth" }, { type: "null" }],
					},
					quoteProperties: {
						description:
							"When properties in objects are quoted. Defaults to asNeeded.",
						anyOf: [
							{ $ref: "#/definitions/QuoteProperties" },
							{ type: "null" },
						],
					},
					quoteStyle: {
						description:
							"The type of quotes used in JavaScript code. Defaults to double.",
						anyOf: [{ $ref: "#/definitions/QuoteStyle" }, { type: "null" }],
					},
					semicolons: {
						description:
							"Whether the formatter prints semicolons for all statements or only in for statements where it is necessary because of ASI.",
						anyOf: [{ $ref: "#/definitions/Semicolons" }, { type: "null" }],
					},
					trailingComma: {
						description:
							'Print trailing commas wherever possible in multi-line comma-separated syntactic structures. Defaults to "all".',
						anyOf: [{ $ref: "#/definitions/TrailingComma" }, { type: "null" }],
					},
				},
				additionalProperties: false,
			},
			JavascriptOrganizeImports: {
				type: "object",
				additionalProperties: false,
			},
			JavascriptParser: {
				description: "Options that changes how the JavaScript parser behaves",
				type: "object",
				properties: {
					unsafeParameterDecoratorsEnabled: {
						description:
							"It enables the experimental and unsafe parsing of parameter decorators\n\nThese decorators belong to an old proposal, and they are subject to change.",
						type: ["boolean", "null"],
					},
				},
				additionalProperties: false,
			},
			JsonConfiguration: {
				description: "Options applied to JSON files",
				type: "object",
				properties: {
					formatter: {
						description: "Formatting options",
						anyOf: [{ $ref: "#/definitions/JsonFormatter" }, { type: "null" }],
					},
					parser: {
						description: "Parsing options",
						anyOf: [{ $ref: "#/definitions/JsonParser" }, { type: "null" }],
					},
				},
				additionalProperties: false,
			},
			JsonFormatter: {
				type: "object",
				properties: {
					enabled: {
						description:
							"Control the formatter for JSON (and its super languages) files.",
						type: ["boolean", "null"],
					},
					indentSize: {
						description:
							"The size of the indentation applied to JSON (and its super languages) files. Default to 2.",
						type: ["integer", "null"],
						format: "uint8",
						minimum: 0.0,
					},
					indentStyle: {
						description:
							"The indent style applied to JSON (and its super languages) files.",
						anyOf: [
							{ $ref: "#/definitions/PlainIndentStyle" },
							{ type: "null" },
						],
					},
					indentWidth: {
						description:
							"The size of the indentation applied to JSON (and its super languages) files. Default to 2.",
						type: ["integer", "null"],
						format: "uint8",
						minimum: 0.0,
					},
					lineWidth: {
						description:
							"What's the max width of a line, applied to JSON (and its super languages) files. Defaults to 80.",
						anyOf: [{ $ref: "#/definitions/LineWidth" }, { type: "null" }],
					},
				},
				additionalProperties: false,
			},
			JsonParser: {
				description: "Options that changes how the JSON parser behaves",
				type: "object",
				properties: {
					allowComments: {
						description: "Allow parsing comments in `.json` files",
						type: ["boolean", "null"],
					},
					allowTrailingCommas: {
						description: "Allow parsing trailing commas in `.json` files",
						type: ["boolean", "null"],
					},
				},
				additionalProperties: false,
			},
			LineWidth: {
				description:
					"Validated value for the `line_width` formatter options\n\nThe allowed range of values is 1..=320",
				type: "integer",
				format: "uint16",
				minimum: 0.0,
			},
			LinterConfiguration: {
				type: "object",
				properties: {
					enabled: {
						description:
							"if `false`, it disables the feature and the linter won't be executed. `true` by default",
						default: true,
						type: ["boolean", "null"],
					},
					ignore: {
						description:
							"A list of Unix shell style patterns. The formatter will ignore files/folders that will match these patterns.",
						anyOf: [{ $ref: "#/definitions/StringSet" }, { type: "null" }],
					},
					include: {
						description:
							"A list of Unix shell style patterns. The formatter will include files/folders that will match these patterns.",
						anyOf: [{ $ref: "#/definitions/StringSet" }, { type: "null" }],
					},
					rules: {
						description: "List of rules",
						default: { recommended: true },
						anyOf: [{ $ref: "#/definitions/Rules" }, { type: "null" }],
					},
				},
				additionalProperties: false,
			},
			NamingConventionOptions: {
				description: "Rule's options.",
				type: "object",
				properties: {
					enumMemberCase: {
						description: "Allowed cases for _TypeScript_ `enum` member names.",
						allOf: [{ $ref: "#/definitions/EnumMemberCase" }],
					},
					strictCase: {
						description:
							"If `false`, then consecutive uppercase are allowed in _camel_ and _pascal_ cases. This does not affect other [Case].",
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
			Nursery: {
				description: "A list of rules that belong to this group",
				type: "object",
				properties: {
					all: {
						description: "It enables ALL rules for this group.",
						type: ["boolean", "null"],
					},
					noAccumulatingSpread: {
						description:
							"Disallow the use of spread (...) syntax on accumulators.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noApproximativeNumericConstant: {
						description:
							"Usually, the definition in the standard library is more precise than what people come up with or the used constant exceeds the maximum precision of the number type.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noConfusingVoidType: {
						description:
							"Disallow void type outside of generic or return types.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noDuplicateJsonKeys: {
						description:
							"Disallow two keys with the same name inside a JSON object.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noEmptyCharacterClassInRegex: {
						description:
							"Disallow empty character classes in regular expression literals.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noExcessiveComplexity: {
						description:
							"Disallow functions that exceed a given Cognitive Complexity score.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noFallthroughSwitchClause: {
						description: "Disallow fallthrough of switch clauses.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noGlobalIsFinite: {
						description: "Use Number.isFinite instead of global isFinite.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noGlobalIsNan: {
						description: "Use Number.isNaN instead of global isNaN.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noInvalidNewBuiltin: {
						description:
							"Disallow new operators with global non-constructor functions.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noMisleadingInstantiator: {
						description: "Enforce proper usage of new and constructor.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUnusedImports: {
						description: "Disallow unused imports.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUselessElse: {
						description: "Disallow else block when the if block breaks early.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noVoid: {
						description:
							"Disallow the use of void operators, which is not a familiar operator.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					recommended: {
						description: "It enables the recommended rules for this group",
						type: ["boolean", "null"],
					},
					useArrowFunction: {
						description: "Use arrow functions over function expressions.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useAsConstAssertion: {
						description:
							"Enforce the use of as const over literal type and type annotation.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useCollapsedElseIf: {
						description:
							"Enforce using else if instead of nested if in else clauses.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useExhaustiveDependencies: {
						description: "Enforce all dependencies are correctly specified.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useGroupedTypeImport: {
						description:
							"Enforce the use of import type when an import only has specifiers with type qualifier.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useHookAtTopLevel: {
						description:
							"Enforce that all React hooks are being called from the Top Level component functions.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useImportRestrictions: {
						description: "Disallows package private imports.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useIsArray: {
						description: "Use Array.isArray() instead of instanceof Array.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useShorthandAssign: {
						description:
							"Require assignment operator shorthand where possible.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
				},
			},
			OrganizeImports: {
				type: "object",
				properties: {
					enabled: {
						description: "Enables the organization of imports",
						default: true,
						type: ["boolean", "null"],
					},
					ignore: {
						description:
							"A list of Unix shell style patterns. The formatter will ignore files/folders that will match these patterns.",
						anyOf: [{ $ref: "#/definitions/StringSet" }, { type: "null" }],
					},
					include: {
						description:
							"A list of Unix shell style patterns. The formatter will include files/folders that will match these patterns.",
						anyOf: [{ $ref: "#/definitions/StringSet" }, { type: "null" }],
					},
				},
				additionalProperties: false,
			},
			Performance: {
				description: "A list of rules that belong to this group",
				type: "object",
				properties: {
					all: {
						description: "It enables ALL rules for this group.",
						type: ["boolean", "null"],
					},
					noDelete: {
						description: "Disallow the use of the delete operator.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					recommended: {
						description: "It enables the recommended rules for this group",
						type: ["boolean", "null"],
					},
				},
			},
			PlainIndentStyle: {
				oneOf: [
					{ description: "Tab", type: "string", enum: ["tab"] },
					{ description: "Space", type: "string", enum: ["space"] },
				],
			},
			PossibleOptions: {
				anyOf: [
					{
						description: "Options for `noExcessiveComplexity` rule",
						allOf: [{ $ref: "#/definitions/ComplexityOptions" }],
					},
					{
						description:
							"Options for `useExhaustiveDependencies` and `useHookAtTopLevel` rule",
						allOf: [{ $ref: "#/definitions/HooksOptions" }],
					},
					{
						description: "Options for `useNamingConvention` rule",
						allOf: [{ $ref: "#/definitions/NamingConventionOptions" }],
					},
					{
						description: "Options for `noRestrictedGlobals` rule",
						allOf: [{ $ref: "#/definitions/RestrictedGlobalsOptions" }],
					},
					{ description: "No options available", type: "null" },
				],
			},
			QuoteProperties: { type: "string", enum: ["asNeeded", "preserve"] },
			QuoteStyle: { type: "string", enum: ["double", "single"] },
			RestrictedGlobalsOptions: {
				description: "Options for the rule `noRestrictedGlobals`.",
				type: "object",
				properties: {
					deniedGlobals: {
						description: "A list of names that should trigger the rule",
						type: ["array", "null"],
						items: { type: "string" },
					},
				},
				additionalProperties: false,
			},
			RuleConfiguration: {
				anyOf: [
					{ $ref: "#/definitions/RulePlainConfiguration" },
					{ $ref: "#/definitions/RuleWithOptions" },
				],
			},
			RulePlainConfiguration: {
				type: "string",
				enum: ["warn", "error", "off"],
			},
			RuleWithOptions: {
				type: "object",
				required: ["level"],
				properties: {
					level: { $ref: "#/definitions/RulePlainConfiguration" },
					options: {
						anyOf: [
							{ $ref: "#/definitions/PossibleOptions" },
							{ type: "null" },
						],
					},
				},
				additionalProperties: false,
			},
			Rules: {
				type: "object",
				properties: {
					a11y: {
						anyOf: [{ $ref: "#/definitions/A11y" }, { type: "null" }],
					},
					all: {
						description:
							"It enables ALL rules. The rules that belong to `nursery` won't be enabled.",
						type: ["boolean", "null"],
					},
					complexity: {
						anyOf: [{ $ref: "#/definitions/Complexity" }, { type: "null" }],
					},
					correctness: {
						anyOf: [{ $ref: "#/definitions/Correctness" }, { type: "null" }],
					},
					nursery: {
						anyOf: [{ $ref: "#/definitions/Nursery" }, { type: "null" }],
					},
					performance: {
						anyOf: [{ $ref: "#/definitions/Performance" }, { type: "null" }],
					},
					recommended: {
						description:
							"It enables the lint rules recommended by Biome. `true` by default.",
						type: ["boolean", "null"],
					},
					security: {
						anyOf: [{ $ref: "#/definitions/Security" }, { type: "null" }],
					},
					style: {
						anyOf: [{ $ref: "#/definitions/Style" }, { type: "null" }],
					},
					suspicious: {
						anyOf: [{ $ref: "#/definitions/Suspicious" }, { type: "null" }],
					},
				},
				additionalProperties: false,
			},
			Security: {
				description: "A list of rules that belong to this group",
				type: "object",
				properties: {
					all: {
						description: "It enables ALL rules for this group.",
						type: ["boolean", "null"],
					},
					noDangerouslySetInnerHtml: {
						description: "Prevent the usage of dangerous JSX props",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noDangerouslySetInnerHtmlWithChildren: {
						description:
							"Report when a DOM element or a component uses both children and dangerouslySetInnerHTML prop.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					recommended: {
						description: "It enables the recommended rules for this group",
						type: ["boolean", "null"],
					},
				},
			},
			Semicolons: { type: "string", enum: ["always", "asNeeded"] },
			StringSet: {
				type: "array",
				items: { type: "string" },
				uniqueItems: true,
			},
			Style: {
				description: "A list of rules that belong to this group",
				type: "object",
				properties: {
					all: {
						description: "It enables ALL rules for this group.",
						type: ["boolean", "null"],
					},
					noArguments: {
						description: "Disallow the use of arguments",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noCommaOperator: {
						description: "Disallow comma operator.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noImplicitBoolean: {
						description:
							"Disallow implicit true values on JSX boolean attributes",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noInferrableTypes: {
						description:
							"Disallow type annotations for variables, parameters, and class properties initialized with a literal expression.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noNamespace: {
						description: "Disallow the use of TypeScript's namespaces.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noNegationElse: {
						description:
							"Disallow negation in the condition of an if statement if it has an else clause.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noNonNullAssertion: {
						description:
							"Disallow non-null assertions using the ! postfix operator.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noParameterAssign: {
						description: "Disallow reassigning function parameters.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noParameterProperties: {
						description:
							"Disallow the use of parameter properties in class constructors.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noRestrictedGlobals: {
						description:
							"This rule allows you to specify global variable names that you don’t want to use in your application.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noShoutyConstants: {
						description:
							"Disallow the use of constants which its value is the upper-case version of its name.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUnusedTemplateLiteral: {
						description:
							"Disallow template literals if interpolation and special-character handling are not needed",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noVar: {
						description: "Disallow the use of var",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					recommended: {
						description: "It enables the recommended rules for this group",
						type: ["boolean", "null"],
					},
					useBlockStatements: {
						description: "Requires following curly brace conventions.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useConst: {
						description:
							"Require const declarations for variables that are never reassigned after declared.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useDefaultParameterLast: {
						description:
							"Enforce default function parameters and optional function parameters to be last.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useEnumInitializers: {
						description:
							"Require that each enum member value be explicitly initialized.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useExponentiationOperator: {
						description:
							"Disallow the use of Math.pow in favor of the ** operator.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useFragmentSyntax: {
						description:
							"This rule enforces the use of <>...</> over <Fragment>...</Fragment>.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useLiteralEnumMembers: {
						description: "Require all enum members to be literal values.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useNamingConvention: {
						description:
							"Enforce naming conventions for everything across a codebase.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useNumericLiterals: {
						description:
							"Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useSelfClosingElements: {
						description:
							"Prevent extra closing tags for components without children",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useShorthandArrayType: {
						description:
							"When expressing array types, this rule promotes the usage of T[] shorthand instead of Array<T>.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useSingleCaseStatement: {
						description:
							"Enforces switch clauses have a single statement, emits a quick fix wrapping the statements in a block.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useSingleVarDeclarator: {
						description:
							"Disallow multiple variable declarations in the same variable statement",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useTemplate: {
						description: "Prefer template literals over string concatenation.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useWhile: {
						description:
							"Enforce the use of while loops instead of for loops when the initializer and update expressions are not needed.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
				},
			},
			Suspicious: {
				description: "A list of rules that belong to this group",
				type: "object",
				properties: {
					all: {
						description: "It enables ALL rules for this group.",
						type: ["boolean", "null"],
					},
					noArrayIndexKey: {
						description: "Discourage the usage of Array index in keys.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noAssignInExpressions: {
						description: "Disallow assignments in expressions.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noAsyncPromiseExecutor: {
						description:
							"Disallows using an async function as a Promise executor.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noCatchAssign: {
						description: "Disallow reassigning exceptions in catch clauses.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noClassAssign: {
						description: "Disallow reassigning class members.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noCommentText: {
						description: "Prevent comments from being inserted as text nodes",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noCompareNegZero: {
						description: "Disallow comparing against -0",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noConfusingLabels: {
						description: "Disallow labeled statements that are not loops.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noConsoleLog: {
						description: "Disallow the use of console.log",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noConstEnum: {
						description: "Disallow TypeScript const enum",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noControlCharactersInRegex: {
						description:
							"Prevents from having control characters and some escape sequences that match control characters in regular expressions.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noDebugger: {
						description: "Disallow the use of debugger",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noDoubleEquals: {
						description: "Require the use of === and !==",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noDuplicateCase: {
						description: "Disallow duplicate case labels.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noDuplicateClassMembers: {
						description: "Disallow duplicate class members.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noDuplicateJsxProps: {
						description:
							"Prevents JSX properties to be assigned multiple times.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noDuplicateObjectKeys: {
						description:
							"Prevents object literals having more than one property declaration for the same name.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noDuplicateParameters: {
						description: "Disallow duplicate function parameter name.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noEmptyInterface: {
						description: "Disallow the declaration of empty interfaces.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noExplicitAny: {
						description: "Disallow the any type usage.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noExtraNonNullAssertion: {
						description:
							"Prevents the wrong usage of the non-null assertion operator (!) in TypeScript files.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noFunctionAssign: {
						description: "Disallow reassigning function declarations.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noImportAssign: {
						description: "Disallow assigning to imported bindings",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noLabelVar: {
						description: "Disallow labels that share a name with a variable",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noPrototypeBuiltins: {
						description: "Disallow direct use of Object.prototype builtins.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noRedeclare: {
						description:
							"Disallow variable, function, class, and type redeclarations in the same scope.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noRedundantUseStrict: {
						description: 'Prevents from having redundant "use strict".',
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noSelfCompare: {
						description:
							"Disallow comparisons where both sides are exactly the same.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noShadowRestrictedNames: {
						description:
							"Disallow identifiers from shadowing restricted names.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noSparseArray: {
						description: "Disallow sparse arrays",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUnsafeDeclarationMerging: {
						description:
							"Disallow unsafe declaration merging between interfaces and classes.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					noUnsafeNegation: {
						description: "Disallow using unsafe negation.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					recommended: {
						description: "It enables the recommended rules for this group",
						type: ["boolean", "null"],
					},
					useDefaultSwitchClauseLast: {
						description:
							"Enforce default clauses in switch statements to be last",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useGetterReturn: {
						description: "Enforce get methods to always return a value.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useNamespaceKeyword: {
						description:
							"Require using the namespace keyword over the module keyword to declare TypeScript namespaces.",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
					useValidTypeof: {
						description:
							"This rule verifies the result of typeof $expr unary expressions is being compared to valid values, either string literals containing valid type names or other typeof expressions",
						anyOf: [
							{ $ref: "#/definitions/RuleConfiguration" },
							{ type: "null" },
						],
					},
				},
			},
			TrailingComma: {
				description:
					"Print trailing commas wherever possible in multi-line comma-separated syntactic structures.",
				oneOf: [
					{
						description:
							"Trailing commas wherever possible (including function parameters and calls).",
						type: "string",
						enum: ["all"],
					},
					{
						description:
							"Trailing commas where valid in ES5 (objects, arrays, etc.). No trailing commas in type parameters in TypeScript.",
						type: "string",
						enum: ["es5"],
					},
					{
						description: "No trailing commas.",
						type: "string",
						enum: ["none"],
					},
				],
			},
			VcsClientKind: {
				oneOf: [
					{
						description: "Integration with the git client as VCS",
						type: "string",
						enum: ["git"],
					},
				],
			},
			VcsConfiguration: {
				description:
					"Set of properties to integrate Biome with a VCS software.",
				type: "object",
				properties: {
					clientKind: {
						description: "The kind of client.",
						anyOf: [{ $ref: "#/definitions/VcsClientKind" }, { type: "null" }],
					},
					enabled: {
						description:
							"Whether Biome should integrate itself with the VCS client",
						type: ["boolean", "null"],
					},
					root: {
						description:
							"The folder where Biome should check for VCS files. By default, Biome will use the same folder where `biome.json` was found.\n\nIf Biome can't find the configuration, it will attempt to use the current working directory. If no current working directory can't be found, Biome won't use the VCS integration, and a diagnostic will be emitted",
						type: ["string", "null"],
					},
					useIgnoreFile: {
						description:
							"Whether Biome should use the VCS ignore file. When [true], Biome will ignore the files specified in the ignore file.",
						type: ["boolean", "null"],
					},
				},
				additionalProperties: false,
			},
		},
	};
	return new Response(JSON.stringify(schema), {
		status: 200,
		headers: {
			"content-type": "application/json",
		},
	});
}
