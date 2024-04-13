import { ColorPicker, Space } from 'antd'
import React from 'react'

type Props = {}

const Theme = (props: Props) => {
	return (
		<Space direction="vertical">
			<ColorPicker
				defaultValue="#1677ff"
				showText={color => <span>Primary Color ({color.toHexString()})</span>}
			/>
			<ColorPicker defaultValue="#1677ff" showText={color => <span>Secondary ({color.toHexString()})</span>} />
			<ColorPicker defaultValue="#1677ff" showText={color => <span>Tertiary ({color.toHexString()})</span>} />
			<ColorPicker defaultValue="#1677ff" showText={color => <span>Fourth Color ({color.toHexString()})</span>} />
		</Space>
	)
}

export default Theme