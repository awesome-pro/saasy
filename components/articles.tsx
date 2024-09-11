import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'



function Articles() {
  return (
    <section
    className="w-full "
>
    <h3
        className="reveal-up text-center text-4xl font-medium max-md:text-2xl"
    >
        Read our articles ✨
    </h3>
    <div
        className="grid md:grid-cols-4  gap-x-10 mt-5"
    >
        {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
        ))}
    </div>

</section>
  )
}

export default Articles

function ArticleCard(
    {image, title, description}: {image: string, title: string, description: string}
) {
  return (
    <Card className='p-0 '>
            <CardHeader className='min-h-[230px] min-w-[200px] object-fill rounded-xl' style={{ backgroundImage: `url(${image})`}}>
            </CardHeader>
        <CardContent className='mt-3 '>
            <h3 className='text-xl font-semibold'>{title}</h3>    
            <p>{description}</p>
        </CardContent>
        <CardFooter>
           <Button variant="outline">Read more</Button>
        </CardFooter>
    </Card>
  )
}



const articles = [
    {
        image: "/images/home/forest.jpg",
        title: "Article 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!"
    },
    {
        image: "/images/home/mountain.jpg",
        title: "Article 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!"
    },
    {
        image: "/images/home/photography.jpg",
        title: "Article 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!"
    }
]   