export const formatData = fecha => {
    const dataNew = new Date(fecha)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return dataNew.toLocaleDateString('en-US', options)
}
