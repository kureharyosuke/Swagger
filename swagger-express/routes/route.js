/**
 * @swagger
 *  /product:
 *    get:
 *      tags:
 *      - product
 *      description: 모든 제품 조회
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: category
 *          required: false
 *          schema:
 *            type: integer
 *            description: 카테고리
 *      responses:
 *        200:
 *          description: 제품 조회 성공
 *          schema:
 *            type: array
 *            items:
 *            $ref: '#/components/schemas/Product'
 */
router.get("/", getList);
