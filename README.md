# Vue CLI Module Federation

Demo sử dụng Vue CLI với Webpack Module Federation.

## Setup

```
lerna bootstrap
lerna serve
```

## Features

1. Release micro frontend không cần build lại shell.
1. Tự động kiểm tra dependencies ở runtime, dẫn tới không cần tải trùng lặp dependencies.
1. Chỉ load micro frontend, component và dependencies khi cần thiết.
1. Không cần khai báo danh sách remotes trong Webpack config, nên thêm feature cũng không cần build lại shell.

## Upcoming

1. Design styleguide.
1. Interface cho micro frontend.
1. Shell layout.
1. Better TypeScript definition.
1. Giao tiếp giữa các micro frontend.
1. Authentication.
1. Hạn chế gọi API trùng lặp.
