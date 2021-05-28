import React, { useEffect, useRef } from 'react'
import { findDOMNode } from 'react-dom'

import G6 from '@antv/g6'

const Settings = () => {
  const graphDom = useRef(null)
  let graph = null

  const data = {
    nodes: [
      {
        id: '1',
        label: '公司1'
      },
      {
        id: '2',
        label: '公司2'
      },
      {
        id: '3',
        label: '公司3'
      },
      {
        id: '4',
        label: '公司4'
      },
      {
        id: '5',
        label: '公司5'
      },
      {
        id: '6',
        label: '公司6'
      },
      {
        id: '7',
        label: '公司7'
      },
      {
        id: '8',
        label: '公司8'
      },
      {
        id: '9',
        label: '公司9'
      }
    ],
    edges: [
      {
        source: '1',
        target: '2',
        data: {
          type: 'name1',
          amount: '100,000,000,00 元',
          date: '2019-08-03'
        }
      },
      {
        source: '1',
        target: '3',
        data: {
          type: 'name2',
          amount: '100,000,000,00 元',
          date: '2019-08-03'
        }
      },
      {
        source: '2',
        target: '5',
        data: {
          type: 'name1',
          amount: '100,000,000,00 元',
          date: '2019-08-03'
        }
      },
      {
        source: '5',
        target: '6',
        data: {
          type: 'name2',
          amount: '100,000,000,00 元',
          date: '2019-08-03'
        }
      },
      {
        source: '3',
        target: '4',
        data: {
          type: 'name3',
          amount: '100,000,000,00 元',
          date: '2019-08-03'
        }
      },
      {
        source: '4',
        target: '7',
        data: {
          type: 'name2',
          amount: '100,000,000,00 元',
          date: '2019-08-03'
        }
      },
      {
        source: '1',
        target: '8',
        data: {
          type: 'name2',
          amount: '100,000,000,00 元',
          date: '2019-08-03'
        }
      },
      {
        source: '1',
        target: '9',
        data: {
          type: 'name3',
          amount: '100,000,000,00 元',
          date: '2019-08-03'
        }
      }
    ]
  }

  useEffect(() => {
    console.log(findDOMNode(graphDom.current))

    if (!graph) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      graph = new G6.Graph({
        container: findDOMNode(graphDom.current),
        width: '50',
        height: '50',
        modes: {
          default: ['drag-canvas']
        },
        layout: {
          type: 'dagre',
          direction: 'LR'
        },
        defaultNode: {
          type: 'node',
          labelCfg: {
            style: {
              fill: '#f40',
              fontSize: 10
            }
          },
          style: {
            stroke: '#72CC4A',
            width: 30
          }
        },
        defaultEdge: {
          type: 'polyline'
        }
      })
    }
    graph.data(data)
    graph.render()
  }, [])

  return (
    <>
      <div ref={graphDom}></div>
    </>
  )
}

export default Settings
