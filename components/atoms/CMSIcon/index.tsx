type CMSIconProps = {
    icon: string
}

export default function CMSIcon ({ icon }: CMSIconProps) {
    return (
        <div dangerouslySetInnerHTML={{
            __html: icon
        }} />
    )
}