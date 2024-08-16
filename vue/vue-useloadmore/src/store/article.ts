import { defineStore } from 'pinia'
import type { Article } from '../types/article.ts'
import { ref } from 'vue'

export const useArticleStore = defineStore('article', () => {
  const _articles: Article[] = [
    {
      id: 1,
      title: "猪猪侠"
    },
    {
      id: 2,
      title: "超人强"
    },
    {
      id: 3,
      title: "小小怪"
    },
    {
      id: 4,
      title: "光头强"
    },
    {
      id: 5,
      title: "葫芦娃"
    },
    {
      id: 6,
      title: "蜡笔小新"
    },
    {
      id: 7,
      title: "熊出没"
    },
    {
      id: 8,
      title: "猪猪侠"
    },
    {
      id: 9,
      title: "超人强"
    },
    {
      id: 10,
      title: "小小怪"
    },
    {
      id: 11,
      title: "光头强"
    },
    {
      id: 12,
      title: "葫芦娃"
    },
    {
      id: 13,
      title: "蜡笔小新"
    },
    {
      id: 14,
      title: "熊出没"
    },
    {
      id: 15,
      title: "猪猪侠"
    },
    {
      id: 16,
      title: "超人强"
    },
    {
      id: 17,
      title: "小小怪"
    },
    {
      id: 18,
      title: "光头强"
    },
    {
      id: 19,
      title: "葫芦娃"
    },
    {
      id: 20,
      title: "蜡笔小新"
    },
    {
      id: 21,
      title: "熊出没"
    },
    {
      id: 22,
      title: "猪猪侠"
    },
    {
      id: 23,
      title: "超人强"
    },
    {
      id: 24,
      title: "小小怪"
    },
    {
      id: 25,
      title: "光头强"
    },
    {
      id: 26,
      title: "葫芦娃"
    },
    {
      id: 27,
      title: "蜡笔小新"
    },
    {
      id: 28,
      title: "熊出没"
    }
  ]

  // 分页获取文章列表
  function getArticles(page: number, size: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 拿到某页的数据
        const data = _articles.slice((page - 1) * size, page * size)
        articles.value = [...articles.value, ...data]
        resolve({
        data,
        page,
        total: _articles.length,
        hasMore: page * size < _articles.length
      })
      }, 1000)
    })
  }

  // 向外输出的数据
  const articles = ref<Article[]>([])

  return {
    articles,
    getArticles
  }

})