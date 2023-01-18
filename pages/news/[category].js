function NewsArticleListByCategory({articles, category}) {
    return (
        <>
       <h1>Showing news for category <i>{category}</i></h1>
    {
        articles.map(article => {
            return (
                <div key = {article.id}>
                    <h2>
                        {article.id} {article.title} | {article.category}
                    </h2>
                    <p>{article.description}</p>
                    <hr/>
                </div>
            )
        })}
        </>
    )
}
export default NewsArticleListByCategory
export async function getServerSideProps(context) {
    const { params } = context
    const { category } = params
    const response = await fetch (`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category,
        }
    }
}