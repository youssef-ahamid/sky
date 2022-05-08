import chevronR from '$lib/icons/shape/chevron_right.svelte'
const iconList = [
    {
        name: 'chevron_right',
        component: chevronR
    },
]

const iconNames = iconList.map(icon => icon.name)

export const resolve = icon => {
    return iconList[iconNames.indexOf(icon)].component
}