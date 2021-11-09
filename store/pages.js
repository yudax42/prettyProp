export const actions = {
  async getPage(_, pageId) {
    const data = await (
      await fetch(`${this.$config.baseURL}getPage`, {
        method: 'POST',
        body: JSON.stringify(pageId),
      })
    ).json()

    return data
  },
}
