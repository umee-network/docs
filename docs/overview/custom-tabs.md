# Custom Tabs

## Preview

### Demo 1

```md
:::: tabs

::: tab tab 1

content 1

:::

::: tab tab 2

content 2

:::

::::
```

:::: tabs 

::: tab tab 1

content 1

:::

::: tab tab 2

content 2

:::

::: tab tab 3

content 3

:::

::: tab tab 4

content 4

:::

::: tab tab 5

content 5

:::

::::

### Demo 2

```md
:::: tabs tab-position:bottom

::: tab A

content 1

:::

::: tab a tab with eager in its name

Note that this content won't be eagerly loaded since the word `eager` will be treated as a part of the tab name

:::

::::
```

:::: tabs tab-position:bottom

::: tab A

content 1

:::

::: tab a tab with eager in its name

Note that this content won't be eagerly loaded since the word `eager` will be treated as a part of the tab name

![Umee](/img/umee.png)

:::

::::

### Demo 3

```md
:::: tabs tab-position:left

::: tab A

content 1

:::

::: tab B eager

eagerly loaded content

:::

::::
```

:::: tabs tab-position:left

::: tab A

content 1

:::

::: tab B eager

This photo will be eagerly loaded

![Umee](/img/umee.png)

:::

::::
