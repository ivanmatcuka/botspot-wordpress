export interface Root {
	title: string;
	$schema: string;
	definitions: Definitions;
	type: string;
	properties: Properties;
	required: string[];
	additionalProperties: boolean;
}

export interface Definitions {
	"//": GeneratedType;
}

export interface GeneratedType {
	reference: string;
	attributesReference: string;
	contextReference: string;
	supportsReference: string;
	registerReference: string;
}

export interface Properties {
	$schema: Schema;
	apiVersion: ApiVersion;
	name: Name;
	__experimental: Experimental;
	title: Title;
	category: Category;
	parent: Parent;
	ancestor: Ancestor;
	allowedBlocks: AllowedBlocks;
	icon: Icon;
	description: Description;
	keywords: Keywords;
	version: Version;
	textdomain: Textdomain;
	attributes: Attributes;
	providesContext: ProvidesContext;
	usesContext: UsesContext;
	supports: Supports;
	selectors: Selectors;
	styles: Styles;
	example: Example;
	blockHooks: BlockHooks;
	editorScript: EditorScript;
	script: Script;
	viewScript: ViewScript;
	viewScriptModule: ViewScriptModule;
	editorStyle: EditorStyle;
	style: Style2;
	viewStyle: ViewStyle;
	variations: Variations;
	render: Render;
}

export interface Schema {
	type: string;
}

export interface ApiVersion {
	description: string;
	type: string;
	enum: number[];
	default: number;
}

export interface Name {
	description: string;
	type: string;
	pattern: string;
}

export interface Experimental {
	description: string;
	anyOf: AnyOf[];
}

export interface AnyOf {
	type: string;
}

export interface Title {
	description: string;
	type: string;
}

export interface Category {
	description: string;
	anyOf: AnyOf2[];
}

export interface AnyOf2 {
	type: string;
	enum?: string[];
}

export interface Parent {
	description: string;
	type: string;
	items: Items;
}

export interface Items {
	type: string;
}

export interface Ancestor {
	description: string;
	type: string;
	items: Items2;
}

export interface Items2 {
	type: string;
}

export interface AllowedBlocks {
	description: string;
	type: string;
	items: Items3;
}

export interface Items3 {
	type: string;
}

export interface Icon {
	description: string;
	type: string;
}

export interface Description {
	description: string;
	type: string;
}

export interface Keywords {
	description: string;
	type: string;
	items: Items4;
}

export interface Items4 {
	type: string;
}

export interface Version {
	description: string;
	type: string;
}

export interface Textdomain {
	description: string;
	type: string;
}

export interface Attributes {
	description: string;
	type: string;
	patternProperties: PatternProperties;
	additionalProperties: boolean;
}

export interface PatternProperties {
	"[a-zA-Z]": AZAZ;
}

export interface AZAZ {
	type: string;
	properties: Properties2;
	anyOf: AnyOf3[];
}

export interface Properties2 {
	type: Type;
	enum: Enum;
	source: Source;
	selector: Selector;
	attribute: Attribute;
	query: Query;
	meta: Meta;
	default: Default;
}

export interface Type {
	description: string;
	oneOf: OneOf[];
}

export interface OneOf {
	type: string;
	enum?: string[];
	uniqueItems?: boolean;
	items?: Items5;
}

export interface Items5 {
	type: string;
	enum: string[];
}

export interface Enum {
	description: string;
	type: string;
	items: Items6;
}

export interface Items6 {
	oneOf: OneOf2[];
}

export interface OneOf2 {
	type: string;
}

export interface Source {
	description: string;
	type: string;
	enum: string[];
}

export interface Selector {
	description: string;
	type: string;
}

export interface Attribute {
	description: string;
	type: string;
}

export interface Query {
	description: string;
	type: string;
}

export interface Meta {
	description: string;
	type: string;
}

export interface Default {
	description: string;
}

export interface AnyOf3 {
	required: string[];
}

export interface ProvidesContext {
	description: string;
	type: string;
	patternProperties: PatternProperties2;
}

export interface PatternProperties2 {
	"[a-zA-Z]": AZAZ2;
}

export interface AZAZ2 {
	type: string;
}

export interface UsesContext {
	description: string;
	type: string;
	items: Items7;
}

export interface Items7 {
	type: string;
}

export interface Supports {
	description: string;
	type: string;
	properties: Properties3;
	additionalProperties: boolean;
}

export interface Properties3 {
	anchor: Anchor;
	align: Align;
	alignWide: AlignWide;
	ariaLabel: AriaLabel;
	className: ClassName;
	color: Color;
	customClassName: CustomClassName;
	dimensions: Dimensions;
	filter: Filter;
	background: Background2;
	html: Html;
	inserter: Inserter;
	renaming: Renaming;
	layout: Layout;
	multiple: Multiple;
	reusable: Reusable;
	lock: Lock;
	position: Position;
	spacing: Spacing;
	shadow: Shadow;
	typography: Typography;
	interactivity: Interactivity;
	splitting: Splitting;
}

export interface Anchor {
	description: string;
	type: string;
	default: boolean;
}

export interface Align {
	description: string;
	oneOf: OneOf3[];
	default: boolean;
}

export interface OneOf3 {
	type: string;
	items?: Items8;
}

export interface Items8 {
	type: string;
	enum: string[];
}

export interface AlignWide {
	description: string;
	type: string;
	default: boolean;
}

export interface AriaLabel {
	description: string;
	type: string;
	default: boolean;
}

export interface ClassName {
	description: string;
	type: string;
	default: boolean;
}

export interface Color {
	description: string;
	type: string;
	properties: Properties4;
}

export interface Properties4 {
	background: Background;
	gradients: Gradients;
	link: Link;
	text: Text;
	heading: Heading;
	button: Button;
	enableContrastChecker: EnableContrastChecker;
}

export interface Background {
	description: string;
	type: string;
	default: boolean;
}

export interface Gradients {
	description: string;
	type: string;
	default: boolean;
}

export interface Link {
	description: string;
	type: string;
	default: boolean;
}

export interface Text {
	description: string;
	type: string;
	default: boolean;
}

export interface Heading {
	description: string;
	type: string;
	default: boolean;
}

export interface Button {
	description: string;
	type: string;
	default: boolean;
}

export interface EnableContrastChecker {
	description: string;
	type: string;
	default: boolean;
}

export interface CustomClassName {
	description: string;
	type: string;
	default: boolean;
}

export interface Dimensions {
	description: string;
	type: string;
	properties: Properties5;
}

export interface Properties5 {
	aspectRatio: AspectRatio;
	minHeight: MinHeight;
}

export interface AspectRatio {
	description: string;
	type: string;
	default: boolean;
}

export interface MinHeight {
	description: string;
	type: string;
	default: boolean;
}

export interface Filter {
	description: string;
	type: string;
	properties: Properties6;
}

export interface Properties6 {
	duotone: Duotone;
}

export interface Duotone {
	description: string;
	type: string;
	default: boolean;
}

export interface Background2 {
	description: string;
	type: string;
	properties: Properties7;
}

export interface Properties7 {
	backgroundImage: BackgroundImage;
	backgroundSize: BackgroundSize;
}

export interface BackgroundImage {
	description: string;
	type: string;
	default: boolean;
}

export interface BackgroundSize {
	description: string;
	type: string;
	default: boolean;
}

export interface Html {
	description: string;
	type: string;
	default: boolean;
}

export interface Inserter {
	description: string;
	type: string;
	default: boolean;
}

export interface Renaming {
	description: string;
	type: string;
	default: boolean;
}

export interface Layout {
	description: string;
	oneOf: OneOf4[];
	default: boolean;
}

export interface OneOf4 {
	type: string;
	properties?: Properties8;
}

export interface Properties8 {
	default: Default2;
	allowSwitching: AllowSwitching;
	allowEditing: AllowEditing;
	allowInheriting: AllowInheriting;
	allowSizingOnChildren: AllowSizingOnChildren;
	allowVerticalAlignment: AllowVerticalAlignment;
	allowJustification: AllowJustification;
	allowOrientation: AllowOrientation;
	allowCustomContentAndWideSize: AllowCustomContentAndWideSize;
}

export interface Default2 {
	description: string;
	type: string;
	properties: Properties9;
}

export interface Properties9 {
	type: Type2;
	contentSize: ContentSize;
	wideSize: WideSize;
	justifyContent: JustifyContent;
	orientation: Orientation;
	flexWrap: FlexWrap;
	verticalAlignment: VerticalAlignment;
	minimumColumnWidth: MinimumColumnWidth;
	columnCount: ColumnCount;
}

export interface Type2 {
	description: string;
	type: string;
	enum: string[];
}

export interface ContentSize {
	description: string;
	type: string;
}

export interface WideSize {
	description: string;
	type: string;
}

export interface JustifyContent {
	description: string;
	type: string;
	enum: string[];
}

export interface Orientation {
	description: string;
	type: string;
	enum: string[];
}

export interface FlexWrap {
	description: string;
	type: string;
	enum: string[];
}

export interface VerticalAlignment {
	description: string;
	type: string;
	enum: string[];
}

export interface MinimumColumnWidth {
	description: string;
	type: string;
}

export interface ColumnCount {
	description: string;
	type: string;
}

export interface AllowSwitching {
	description: string;
	type: string;
	default: boolean;
}

export interface AllowEditing {
	description: string;
	type: string;
	default: boolean;
}

export interface AllowInheriting {
	description: string;
	type: string;
	default: boolean;
}

export interface AllowSizingOnChildren {
	description: string;
	type: string;
	default: boolean;
}

export interface AllowVerticalAlignment {
	description: string;
	type: string;
	default: boolean;
}

export interface AllowJustification {
	description: string;
	type: string;
	default: boolean;
}

export interface AllowOrientation {
	description: string;
	type: string;
	default: boolean;
}

export interface AllowCustomContentAndWideSize {
	description: string;
	type: string;
	default: boolean;
}

export interface Multiple {
	description: string;
	type: string;
	default: boolean;
}

export interface Reusable {
	description: string;
	type: string;
	default: boolean;
}

export interface Lock {
	description: string;
	type: string;
	default: boolean;
}

export interface Position {
	description: string;
	type: string;
	properties: Properties10;
}

export interface Properties10 {
	sticky: Sticky;
}

export interface Sticky {
	description: string;
	type: string;
	default: boolean;
}

export interface Spacing {
	description: string;
	type: string;
	properties: Properties11;
}

export interface Properties11 {
	margin: Margin;
	padding: Padding;
}

export interface Margin {
	oneOf: OneOf5[];
}

export interface OneOf5 {
	type: string;
	items?: Items9;
}

export interface Items9 {
	type: string;
	enum: string[];
}

export interface Padding {
	oneOf: OneOf6[];
}

export interface OneOf6 {
	type: string;
	items?: Items10;
}

export interface Items10 {
	type: string;
	enum: string[];
}

export interface Shadow {
	description: string;
	oneOf: OneOf7[];
	default: boolean;
}

export interface OneOf7 {
	description?: string;
	type: string;
}

export interface Typography {
	description: string;
	type: string;
	properties: Properties12;
}

export interface Properties12 {
	fontSize: FontSize;
	lineHeight: LineHeight;
	textAlign: TextAlign;
}

export interface FontSize {
	description: string;
	type: string;
	default: boolean;
}

export interface LineHeight {
	description: string;
	type: string;
	default: boolean;
}

export interface TextAlign {
	description: string;
	oneOf: OneOf8[];
	default: boolean;
}

export interface OneOf8 {
	type: string;
	items?: Items11;
}

export interface Items11 {
	type: string;
	enum: string[];
}

export interface Interactivity {
	description: string;
	oneOf: OneOf9[];
}

export interface OneOf9 {
	description?: string;
	type: string;
	default?: boolean;
	properties?: Properties13;
}

export interface Properties13 {
	clientNavigation: ClientNavigation;
	interactive: Interactive;
}

export interface ClientNavigation {
	description: string;
	type: string;
	default: boolean;
}

export interface Interactive {
	description: string;
	type: string;
	default: boolean;
}

export interface Splitting {
	description: string;
	type: string;
	default: boolean;
}

export interface Selectors {
	description: string;
	type: string;
	properties: Properties14;
}

export interface Properties14 {
	root: Root2;
	border: Border;
	color: Color3;
	dimensions: Dimensions2;
	spacing: Spacing2;
	typography: Typography2;
}

export interface Root2 {
	description: string;
	type: string;
}

export interface Border {
	description: string;
	oneOf: OneOf10[];
}

export interface OneOf10 {
	type: string;
	properties?: Properties15;
}

export interface Properties15 {
	root: Root3;
	color: Color2;
	radius: Radius;
	style: Style;
	width: Width;
}

export interface Root3 {
	type: string;
}

export interface Color2 {
	type: string;
}

export interface Radius {
	type: string;
}

export interface Style {
	type: string;
}

export interface Width {
	type: string;
}

export interface Color3 {
	description: string;
	oneOf: OneOf11[];
}

export interface OneOf11 {
	type: string;
	properties?: Properties16;
}

export interface Properties16 {
	root: Root4;
	text: Text2;
	background: Background3;
}

export interface Root4 {
	type: string;
}

export interface Text2 {
	type: string;
}

export interface Background3 {
	type: string;
}

export interface Dimensions2 {
	description: string;
	oneOf: OneOf12[];
}

export interface OneOf12 {
	type: string;
	properties?: Properties17;
}

export interface Properties17 {
	root: Root5;
	aspectRatio: AspectRatio2;
	minHeight: MinHeight2;
}

export interface Root5 {
	type: string;
}

export interface AspectRatio2 {
	type: string;
}

export interface MinHeight2 {
	type: string;
}

export interface Spacing2 {
	description: string;
	oneOf: OneOf13[];
}

export interface OneOf13 {
	type: string;
	properties?: Properties18;
}

export interface Properties18 {
	root: Root6;
	blockGap: BlockGap;
	padding: Padding2;
	margin: Margin2;
}

export interface Root6 {
	type: string;
}

export interface BlockGap {
	type: string;
}

export interface Padding2 {
	type: string;
}

export interface Margin2 {
	type: string;
}

export interface Typography2 {
	description: string;
	oneOf: OneOf14[];
}

export interface OneOf14 {
	type: string;
	properties?: Properties19;
}

export interface Properties19 {
	root: Root7;
	fontFamily: FontFamily;
	fontSize: FontSize2;
	fontStyle: FontStyle;
	fontWeight: FontWeight;
	lineHeight: LineHeight2;
	letterSpacing: LetterSpacing;
	textDecoration: TextDecoration;
	textTransform: TextTransform;
}

export interface Root7 {
	type: string;
}

export interface FontFamily {
	type: string;
}

export interface FontSize2 {
	type: string;
}

export interface FontStyle {
	type: string;
}

export interface FontWeight {
	type: string;
}

export interface LineHeight2 {
	type: string;
}

export interface LetterSpacing {
	type: string;
}

export interface TextDecoration {
	type: string;
}

export interface TextTransform {
	type: string;
}

export interface Styles {
	description: string;
	type: string;
	items: Items12;
}

export interface Items12 {
	type: string;
	properties: Properties20;
	required: string[];
	additionalProperties: boolean;
}

export interface Properties20 {
	name: Name2;
	label: Label;
	isDefault: IsDefault;
}

export interface Name2 {
	type: string;
}

export interface Label {
	type: string;
}

export interface IsDefault {
	type: string;
	default: boolean;
}

export interface Example {
	description: string;
	type: string;
	properties: Properties21;
}

export interface Properties21 {
	viewportWidth: ViewportWidth;
	attributes: Attributes2;
	innerBlocks: InnerBlocks;
}

export interface ViewportWidth {
	description: string;
	type: string;
	default: number;
}

export interface Attributes2 {
	description: string;
	type: string;
}

export interface InnerBlocks {
	description: string;
	type: string;
}

export interface BlockHooks {
	description: string;
	type: string;
	patternProperties: PatternProperties3;
	additionalProperties: boolean;
}

export interface PatternProperties3 {
	"^[a-z][a-z0-9-]*/[a-z][a-z0-9-]*$": AZAZ09AZAZ09;
}

export interface AZAZ09AZAZ09 {
	type: string;
	enum: string[];
}

export interface EditorScript {
	description: string;
	oneOf: OneOf15[];
}

export interface OneOf15 {
	type: string;
	items?: Items13;
}

export interface Items13 {
	type: string;
}

export interface Script {
	description: string;
	oneOf: OneOf16[];
}

export interface OneOf16 {
	type: string;
	items?: Items14;
}

export interface Items14 {
	type: string;
}

export interface ViewScript {
	description: string;
	oneOf: OneOf17[];
}

export interface OneOf17 {
	type: string;
	items?: Items15;
}

export interface Items15 {
	type: string;
}

export interface ViewScriptModule {
	description: string;
	oneOf: OneOf18[];
}

export interface OneOf18 {
	type: string;
	items?: Items16;
}

export interface Items16 {
	type: string;
}

export interface EditorStyle {
	description: string;
	oneOf: OneOf19[];
}

export interface OneOf19 {
	type: string;
	items?: Items17;
}

export interface Items17 {
	type: string;
}

export interface Style2 {
	description: string;
	oneOf: OneOf20[];
}

export interface OneOf20 {
	type: string;
	items?: Items18;
}

export interface Items18 {
	type: string;
}

export interface ViewStyle {
	description: string;
	oneOf: OneOf21[];
}

export interface OneOf21 {
	type: string;
	items?: Items19;
}

export interface Items19 {
	type: string;
}

export interface Variations {
	description: string;
	oneOf: OneOf22[];
}

export interface OneOf22 {
	description: string;
	type: string;
	items?: Items20;
}

export interface Items20 {
	type: string;
	properties: Properties22;
	required: string[];
	additionalProperties: boolean;
}

export interface Properties22 {
	name: Name3;
	title: Title2;
	description: Description2;
	category: Category2;
	icon: Icon2;
	isDefault: IsDefault2;
	attributes: Attributes3;
	innerBlocks: InnerBlocks2;
	example: Example2;
	scope: Scope;
	keywords: Keywords2;
	isActive: IsActive;
}

export interface Name3 {
	description: string;
	type: string;
}

export interface Title2 {
	description: string;
	type: string;
}

export interface Description2 {
	description: string;
	type: string;
}

export interface Category2 {
	description: string;
	anyOf: AnyOf4[];
}

export interface AnyOf4 {
	type: string;
	enum?: string[];
}

export interface Icon2 {
	description: string;
	type: string;
}

export interface IsDefault2 {
	description: string;
	type: string;
	default: boolean;
}

export interface Attributes3 {
	description: string;
	type: string;
}

export interface InnerBlocks2 {
	description: string;
	type: string;
	items: Items21;
}

export interface Items21 {
	type: string;
}

export interface Example2 {
	description: string;
	type: string;
}

export interface Scope {
	description: string;
	type: string;
	items: Items22;
	default: string[];
}

export interface Items22 {
	type: string;
	enum: string[];
}

export interface Keywords2 {
	description: string;
	type: string;
	items: Items23;
}

export interface Items23 {
	type: string;
}

export interface IsActive {
	description: string;
	type: string;
	items: Items24;
}

export interface Items24 {
	type: string;
}

export interface Render {
	description: string;
	type: string;
}
