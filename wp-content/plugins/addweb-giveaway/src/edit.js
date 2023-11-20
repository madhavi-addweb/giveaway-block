/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {RichText} from '@wordpress/block-editor';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ className, attributes, setAttributes } ) {
	return (
		<div className={ className }>
			<RichText
				tagName="h2"
				placeholder="Giveaway Title"
				value={ attributes.title }
				onChange={ (title) => setAttributes( { title }) }
				style={{ color: attributes.titleColor }}
			/>
			<RichText
				tagName="p"
				placeholder="Giveaway Description"
				value={ attributes.description }
				onChange={ (description) => setAttributes( { description }) }
				style={{ color: attributes.descriptionColor }}
			/>
		</div>
	);
}
