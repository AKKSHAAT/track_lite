# Track Lite
![Track Lite](https://github.com/AKKSHAAT/track_lite/blob/master/img.png?raw=true)
## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/track_lite.git
   cd track_lite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. Initialize the database:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Prisma with SQLite

Prisma is configured to use SQLite in this project. The database file is located at `./dev.db`.

### Prisma Commands

- To generate Prisma Client:
  ```bash
  npx prisma generate
  ```

- To apply migrations:
  ```bash
  npx prisma migrate dev
  ```

- To open Prisma Studio:
  ```bash
  npx prisma studio
  ```

For more information, refer to the [Prisma documentation](https://www.prisma.io/docs/).