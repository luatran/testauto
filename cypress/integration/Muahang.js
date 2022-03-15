describe('ĐƠN MUA HÀNG', () => {
    it('Testcase 01: Thêm mới Đơn mua hàng', () => {
        // thay đổi kích thước màn hình
        cy.viewport(1425, 880)

        // phần đăng nhập
        cy.visit('https://app.easybooks.vn/#/login')
        cy.get('#username').type('lua@gmail.com')
        cy.get('#password').type('123456')
        cy.wait(500)
        cy.get('.login-button').eq(0).click()
        cy.get('.mdi-chevron-down').eq(1).click({force: true})
        cy.wait(1000)
        cy.contains('auto').click()
        cy.get('.login-button').eq(0).click()
        //lấy xpath của button
        // cy.xpath('/html/body/eb-main/div/div/div/div/div/eb-error/div[1]/div[2]/form/div[3]/form/div[3]/button').click()
        // cy.wait(15000)

        // //chờ màn trang chỉ load xong thì chuyển đến link thêm mới
        cy.intercept('GET', 'api/trang-chu/suc-khoe-tai-chinh-doanh-nghiep?fromDate=2022-02-01&toDate=2022-02-28').as('suc-khoe-tai-chinh')
        cy.wait('@suc-khoe-tai-chinh').its('response.statusCode').should('eq', 200)

        cy.get('.sidebar-dark').then($elem => {
            // elem is a jQuery object
            console.log($elem);
            if ($elem.hasClass('.detailNotification')) {
                cy.get('.close-button').click({force: true})
                cy.visit('https://app.easybooks.vn/#/don-mua-hang/new')
            } else {
                cy.visit('https://app.easybooks.vn/#/don-mua-hang/new')
            }
        })
        cy.wait(500)

        // // Thêm mới đơn mua hàng
        cy.get('#field_accountingObject').type('NCC001')
        cy.wait(100)
        cy.get('#cbb').first().click()
        cy.get('input[name=shippingPlace]').type('Hà Nội')
        cy.get('#field_employee').type('NV001')
        cy.wait(1000)
        cy.get('#cbb').first().click()
        cy.get('#insertRow').click()
        cy.get('#materialGoodsID0').type('TP001')
        cy.wait(100)
        cy.get('#cbb').first().click()
        cy.get('#amount0').type('{selectall}').type('9.25')
        cy.wait(100)
        cy.get('#unitPrice0').type('{selectall}').type('1425.63')
        cy.get('#discountRate0').type('{selectall}', {force: true}).type('1.36')
        cy.get('#vatRate0').type('5%', {force: true})
        cy.get('#cbb').first().click()
        cy.get('.mdi-briefcase-download').click()

        // // Thêm thành công thì click Đóng
        cy.contains('thành công')
        cy.wait(500)
        cy.get('.mdi-window-close').click()
        cy.wait(1000)

    })

    it('Testcase 02: Lưu & thêm đơn mua hàng', () => {
        // thay đổi kích thước màn hình
        cy.viewport(1500, 880)
        // bỏ qua đăng nhập vào màn danh sách đơn mua hàng
        window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQ1Njc2OTM3LCJpYXQiOjE2NDMwODQ5Mzd9.MOAXqWiIeMiaf_pfrfnNWNDvt42wqNLr3cavp66BYYrPj9tIszNR72A18RKaR33hctFqGjgNFkgK4F2AkaIvQA"')
        // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
        cy.visit('https://app.easybooks.vn/#/don-mua-hang/new')
        cy.wait(1000)

        // Thêm mới đơn mua hàng
        cy.get('#field_accountingObject').type('NCC001')
        cy.wait(100)
        cy.get('#cbb').first().click()
        cy.get('input[name=shippingPlace]').type('Hà Nội')
        cy.get('#field_employee').type('NV001')
        cy.wait(1000)
        cy.get('#cbb').first().click()
        cy.get('#insertRow').click()
        cy.get('#materialGoodsID0').type('TP001')
        cy.wait(100)
        cy.get('#cbb').first().click()
        cy.get('#amount0').type('{selectall}').type('9.25')
        cy.wait(100)
        cy.get('#unitPrice0').type('{selectall}').type('1425.63')
        cy.get('#discountRate0').type('{selectall}', {force: true}).type('1.36')
        cy.get('#vatRate0').type('5%', {force: true})
        cy.get('#cbb').first().click()
        cy.contains('Lưu & thêm').click()

        // Thêm thành công thì click Đóng
        cy.contains('thành công')
        cy.wait(500)
    })

    it('Testcase 03: Sao chép & thêm đơn mua hàng', () => {
        // thay đổi kích thước màn hình
        cy.viewport(1500, 880)
        // bỏ qua đăng nhập vào màn danh sách đơn mua hàng
        window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQ1Njc2OTM3LCJpYXQiOjE2NDMwODQ5Mzd9.MOAXqWiIeMiaf_pfrfnNWNDvt42wqNLr3cavp66BYYrPj9tIszNR72A18RKaR33hctFqGjgNFkgK4F2AkaIvQA"')
        // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
        cy.visit('https://app.easybooks.vn/#/don-mua-hang?page=1&size=10&sort=undefined,asc')
        cy.wait(1000)

        //Chọn đơn mua hàng ở màn danh sách
        cy.get('.voucher-table > table > tbody > tr').eq(0).dblclick()
        cy.wait(1000)
        cy.contains('Sao chép & thêm').click()
        cy.get('#reference').click()
        cy.get('.margin-1').eq(3).type('Hợp đồng mua')
        cy.get('#cbb').first().click()
        cy.get('input[name=dates]').eq(2).clear().type('01/01/2022')
        cy.get('input[name=dates]').eq(3).clear().type('30/11/2022')
        cy.get('.btn-success').click()
        cy.wait(500)
        cy.get('.custom-checkbox').eq(1).click({force: true})
        cy.get('.btn-eb').click()
        cy.get('#field_payers').clear().type('Nguyễn Thị Định')
        cy.contains('Lưu').click()
    })

    it('Testcase 04: Sửa đơn mua hàng', () => {
        // thay đổi kích thước màn hình
        cy.viewport(1500, 880)
        // bỏ qua đăng nhập vào màn danh sách đơn mua hàng
        window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQ1Njc2OTM3LCJpYXQiOjE2NDMwODQ5Mzd9.MOAXqWiIeMiaf_pfrfnNWNDvt42wqNLr3cavp66BYYrPj9tIszNR72A18RKaR33hctFqGjgNFkgK4F2AkaIvQA"')
        // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
        cy.visit('https://app.easybooks.vn/#/don-mua-hang?page=1&size=10&sort=undefined,asc')
        cy.wait(1000)

        // Chọn chứng từ trên màn danh sách
        cy.get('.voucher-table > table > tbody > tr').eq(1).dblclick()
        cy.get('.mdi-rename-box').click()
        // thêm dòng ở grid chi tiết
        cy.get('#insertRow').click()
        cy.get('#materialGoodsID1').clear().type('TP002',{force: true})
        cy.wait(100)
        cy.get('#amount1').type('{selectall}').type('1.3')
        cy.wait(100)
        cy.get('#unitPrice1').type('{selectall}').type('2300')
        cy.get('#discountRate1').type('{selectall}', {force: true}).type('2.6')
        cy.get('#vatRate1').type('5%', {force: true})
        cy.wait(1000)
        cy.get('.mdi-briefcase-download').click()

        // Nếu Lưu thành công thì thoát ra màn danh sách
        cy.contains('thành công')
        cy.wait(500)
        cy.get('.mdi-window-close').click()
        cy.wait(500)
    })

    it('Testcase 05: Xóa đơn mua hàng từ màn danh sách', () => {
        // thay đổi kích thước màn hình
        cy.viewport(1500, 880)
        // bỏ qua đăng nhập vào màn danh sách đơn mua hàng
        window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQ1Njc2OTM3LCJpYXQiOjE2NDMwODQ5Mzd9.MOAXqWiIeMiaf_pfrfnNWNDvt42wqNLr3cavp66BYYrPj9tIszNR72A18RKaR33hctFqGjgNFkgK4F2AkaIvQA"')
        // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
        cy.visit('https://app.easybooks.vn/#/don-mua-hang?page=1&size=10&sort=undefined,asc')
        cy.wait(1000)

        // Xóa chứng từ
        cy.get('.voucher-table > table > tbody > tr').eq(0).click()
        cy.get('.mdi-delete').click()
        cy.wait(1000)
        cy.get('#eb-confirm-delete-pporder').click({force: true})
        cy.wait(1000)
    })

    it('Testcase 06: Xóa đơn mua hàng từ màn chi tiết chứng từ', () => {
        // thay đổi kích thước màn hình
        cy.viewport(1500, 880)
        // bỏ qua đăng nhập vào màn danh sách đơn mua hàng
        window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQ1Njc2OTM3LCJpYXQiOjE2NDMwODQ5Mzd9.MOAXqWiIeMiaf_pfrfnNWNDvt42wqNLr3cavp66BYYrPj9tIszNR72A18RKaR33hctFqGjgNFkgK4F2AkaIvQA"')
        // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
        cy.visit('https://app.easybooks.vn/#/don-mua-hang?page=1&size=10&sort=undefined,asc')
        cy.wait(1000)

        // Xóa chứng từ
        cy.get('.voucher-table > table > tbody > tr').eq(0).dblclick()
        cy.get('.mdi-delete-forever').click()
        cy.get('#eb-confirm-delete-pPDiscountReturn').click()
        cy.wait(500)
    })
})

describe('CHỨNG TỪ MUA HÀNG', () => {

    // it('Testcase 01: Thêm mới Chứng từ mua hàng chưa thanh toán( 1 dòng detail, không kèm hóa đơn)', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     cy.wait(2000)
    //
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Hạn thanh toán
    //     cy.get('input[name=dates]').eq(0).type('26/05/2022')
    //     //Chọn Nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Kèm theo
    //     cy.get('#number_attach').type('01')
    //     cy.wait(500)
    //
    //     // Nhập liệu tab Hàng tiền
    //     //Thêm dòng mới
    //     cy.get('#insertRow').click({force: true})
    //     cy.wait(100)
    //     //Chọn Mã hàng
    //     cy.get('.drop-down-button').eq(4).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('TP001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Chọn Kho
    //     cy.get('.drop-down-button').eq(5).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KHH')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //TK Nợ
    //     cy.get('#debitAccount0').type('{selectall}', {force: true}).type('1561', {force: true})
    //     //TK Có
    //     cy.get('#creditAccount0').type('{selectall}', {force: true}).type('331', {force: true})
    //     //Số lượng
    //     cy.get('#quantity0').type('{selectall}', {force: true}).type('5.36')
    //     //Đơn giá
    //     cy.get('#unitPrice0').type('{selectall}', {force: true}).type('500000')
    //     //Tỷ lệ CK
    //     cy.get('#discountRate0').type('{selectall}', {force: true}).type('2.6')
    //     //Chi phí mua
    //     cy.get('#freightAmount0').type('{selectall}', {force: true}).type('300000')
    //     //Số lô
    //     cy.get('#lotNo0').type('{selectall}', {force: true}).type('HHJG4459')
    //     // chọn ngày trong calendar button ( Hạn dùng)
    //     cy.get('.btn-secondary').eq(4).click({force: true})
    //     cy.get('select').eq(3).select('Thg 12', {force: true}).should('have.value', '12')
    //     cy.get('select').eq(4).select('2022', {force: true}).should('have.value', '2022')
    //     cy.get('.btn-light').eq(10).click()
    //     cy.wait(100)
    //
    //     // Chọn tab thuế
    //     cy.get('#Thue').click()
    //     cy.get('.drop-down-button').eq(9).click({force: true})
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.wait(200)
    //
    //     // Nhập liệu tab Thống kê
    //     cy.get('.nav-link').eq(171).click()
    //     //Chọn Khoản mục CP
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Đối tượng THCP
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Hợp đồng
    //     cy.get('.drop-down-button').eq(7).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Mục thu/ chi
    //     cy.get('.drop-down-button').eq(8).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //chọn Phòng ban
    //     cy.get('.drop-down-button').eq(9).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Mã thống kê
    //     cy.get('.drop-down-button').eq(10).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.wait(200)
    //
    //     // Click Lưu
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(1000)
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    //     cy.wait(2000)
    // })

    // it('Testcase 02: Thêm mới chứng từ mua hàng ( nhiều dòng detail và có hàng hóa không thuộc hợp đồng)', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     cy.wait(2000)
    //
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Hạn thanh toán
    //     cy.get('input[name=dates]').eq(0).type('26/05/2022')
    //     //Chọn Nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Kèm theo
    //     cy.get('#number_attach').type('01')
    //     cy.wait(500)
    //
    //     // Nhập liệu tab Hàng tiền
    //     cy.get('#insertRow').click({force: true})
    //     cy.wait(500)
    //     //Mã hàng
    //     cy.get('.drop-down-button').eq(4).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('TP001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Kho
    //     cy.get('.drop-down-button').eq(5).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KHH')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //tk nợ
    //     cy.get('#debitAccount0').type('{selectall}', {force: true}).type('1561', {force: true})
    //     cy.get('#creditAccount0').type('{selectall}', {force: true}).type('331', {force: true})
    //     cy.get('#quantity0').type('{selectall}', {force: true}).type('5.36')
    //     cy.get('#unitPrice0').type('{selectall}', {force: true}).type('500000')
    //     cy.get('#discountRate0').type('{selectall}', {force: true}).type('2.6')
    //     cy.get('#freightAmount0').type('{selectall}', {force: true}).type('300000')
    //     cy.get('#lotNo0').type('{selectall}', {force: true}).type('HHJG4459')
    //     cy.get('#expiryDate0').type('25/06/2022', {force: true})
    //     cy.wait(100)
    //
    //     // Chọn tab thuế
    //     cy.get('#Thue').click()
    //     cy.get('.drop-down-button').eq(9).click({force: true})
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.wait(200)
    //
    //     // Nhập liệu tab Thống kê
    //     cy.get('.nav-link').eq(171).click()
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(7).click()
    //     cy.get('.data-list').eq(2).click({force: true})
    //     cy.get('.drop-down-button').eq(8).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(9).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(10).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.wait(200)
    //
    //     // Thêm dòng 2
    //     cy.get('.nav-link').eq(169).click()
    //     cy.get('#insertRow').click({force: true})
    //     cy.wait(500)
    //
    //     cy.get('.drop-down-button').eq(11).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('TP002')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.get('.drop-down-button').eq(12).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KTP')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     // TK Nợ
    //     cy.get('#debitAccount1').type('{selectall}', {force: true}).type('1561', {force: true})
    //     //TK Có
    //     cy.get('#creditAccount1').type('{selectall}', {force: true}).type('331', {force: true})
    //     //Số lượng
    //     cy.get('#quantity1').type('{selectall}', {force: true}).type('1')
    //     cy.get('#unitPrice1').type('{selectall}', {force: true}).type('750000')
    //     cy.get('#discountRate1').type('{selectall}', {force: true}).type('2.6')
    //
    //     // Click Lưu
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(100)
    //
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    //     cy.wait(2000)
    // })

    // it('Testcase 03: Thêm mới chứng từ mua hàng ( nhiều dòng detail và có hóa đơn)', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     cy.wait(1000)
    //
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Hạn thanh toán
    //     cy.get('input[name=dates]').eq(0).type('26/05/2022')
    //     //Chọn Nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Nhập Kèm theo
    //     cy.get('#number_attach').type('01')
    //     cy.wait(500)
    //
    // // Chọn checkbox Đã lập hóa đơn
    //     cy.get('#checkBox').click()
    //
    //     // Nhập liệu tab Hàng tiền
    //     cy.get('#insertRow').click({force: true})
    //     cy.wait(500)
    //     //Mã hàng
    //     cy.get('.drop-down-button').eq(4).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('TP001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     cy.wait(100)
    //     //Kho
    //     cy.get('.drop-down-button').eq(5).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KHH')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //
    //     // nhập giá trị vào ô input (combobox)
    //     cy.get('#debitAccount0').type('{selectall}', {force: true}).type('1561', {force: true})
    //     cy.get('#creditAccount0').type('{selectall}', {force: true}).type('331', {force: true})
    //     cy.get('#quantity0').type('{selectall}', {force: true}).type('5.36')
    //     cy.get('#unitPrice0').type('{selectall}', {force: true}).type('500000')
    //     cy.get('#discountRate0').type('{selectall}', {force: true}).type('2.6')
    //     cy.get('#freightAmount0').type('{selectall}', {force: true}).type('300000')
    //     cy.get('#lotNo0').type('{selectall}', {force: true}).type('HHJG4459')
    //     cy.get('#expiryDate0').type('25/06/2022', {force: true})
    //     cy.wait(100)
    //
    //     // Chọn tab thuế
    //     cy.get('#Thue').click()
    //     cy.get('.drop-down-button').eq(9).click({force: true})
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.get('.drop-down-button').eq(12).click({force: true})
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.get('#invoiceSeries0').type('AB/21T', {force: true})
    //     cy.get('#invoiceNo0').type('1425', {force: true})
    //     cy.wait(200)
    //
    //     // Nhập liệu tab Thống kê
    //     cy.get('.nav-link').eq(171).click()
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(7).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(8).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(9).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(10).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.wait(200)
    //
    //     // Thêm dòng 2
    //     cy.get('.nav-link').eq(169).click()
    //     cy.get('#insertRow').click({force: true})
    //     cy.wait(500)
    //
    //     cy.get('.drop-down-button').eq(11).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('TP002')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.get('.drop-down-button').eq(12).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KTP')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     // TK Nợ
    //     cy.get('#debitAccount1').type('{selectall}', {force: true}).type('1561', {force: true})
    //     //TK Có
    //     cy.get('#creditAccount1').type('{selectall}', {force: true}).type('331', {force: true})
    //     //Số lượng
    //     cy.get('#quantity1').type('{selectall}', {force: true}).type('1')
    //     cy.get('#unitPrice1').type('{selectall}', {force: true}).type('750000')
    //     cy.get('#discountRate1').type('{selectall}', {force: true}).type('2.6')
    //
    //     // Click Lưu
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(100)
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    //     cy.wait(2000)
    // })

    // it('Testcase 04: Thêm mới Chứng từ mua hàng ( nhiều dòng detail và chọn phân bổ CP mua, phân bổ CK', () => {
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     cy.wait(1000)
    //
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Hạn thanh toán
    //     cy.get('input[name=dates]').eq(0).type('26/05/2022')
    //     //Chọn Nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Nhập Kèm theo
    //     cy.get('#number_attach').type('01')
    //     cy.wait(500)
    //
    // // Chọn checkbox Đã lập hóa đơn
    //     cy.get('#checkBox').click()
    //
    //     // Nhập liệu tab Hàng tiền
    //     cy.get('#insertRow').click({force: true})
    //     cy.wait(500)
    //     //Mã hàng
    //     cy.get('.drop-down-button').eq(4).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('TP001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     cy.wait(100)
    //     //Kho
    //     cy.get('.drop-down-button').eq(5).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KHH')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //
    //     // nhập giá trị vào ô input (combobox)
    //     cy.get('#debitAccount0').type('{selectall}', {force: true}).type('1561', {force: true})
    //     cy.get('#creditAccount0').type('{selectall}', {force: true}).type('331', {force: true})
    //     cy.get('#quantity0').type('{selectall}', {force: true}).type('5.36')
    //     cy.get('#unitPrice0').type('{selectall}', {force: true}).type('500000')
    //     cy.get('#discountRate0').type('{selectall}', {force: true}).type('2.6')
    //     cy.get('#freightAmount0').type('{selectall}', {force: true}).type('300000')
    //     cy.get('#lotNo0').type('{selectall}', {force: true}).type('HHJG4459')
    //     cy.get('#expiryDate0').type('25/06/2022', {force: true})
    //     cy.wait(100)
    //
    //     // Chọn tab thuế
    //     cy.get('#Thue').click()
    //     cy.get('.drop-down-button').eq(9).click({force: true})
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.get('.drop-down-button').eq(12).click({force: true})
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.get('#invoiceSeries0').type('AB/21T', {force: true})
    //     cy.get('#invoiceNo0').type('1425', {force: true})
    //     cy.wait(200)
    //
    //     // Nhập liệu tab Thống kê
    //     cy.get('.nav-link').eq(171).click()
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(7).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(8).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(9).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(10).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.wait(200)
    //
    //     // Thêm dòng 2
    //     cy.get('.nav-link').eq(169).click()
    //     cy.get('#insertRow').click({force: true})
    //     cy.wait(500)
    //
    //     cy.get('.drop-down-button').eq(11).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('TP002')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.get('.drop-down-button').eq(12).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KTP')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     // TK Nợ
    //     cy.get('#debitAccount1').type('{selectall}', {force: true}).type('1561', {force: true})
    //     //TK Có
    //     cy.get('#creditAccount1').type('{selectall}', {force: true}).type('331', {force: true})
    //     //Số lượng
    //     cy.get('#quantity1').type('{selectall}', {force: true}).type('1')
    //     cy.get('#unitPrice1').type('{selectall}', {force: true}).type('750000')
    //     cy.get('#discountRate1').type('{selectall}', {force: true}).type('2.6')
    //
    //     // Chọn button Phân bổ > Phân bổ CP mua
    //     cy.get('#dropdown').click()
    //     cy.get('.dropdown-i').eq(0).click()
    //     cy.get('.btn-success').eq(0).click()
    //     cy.wait(100)
    //     cy.get('.drop-down-button').eq(18).click({force: true})
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.btn-success').eq(0).click()
    //     cy.get('.custom-control').eq(3).click({force: true})
    //     cy.wait(100)
    //     cy.get('.btn-light').eq(0).click()
    //
    //     // chọn radiobutton
    //     cy.get('[type="radio"].ng-pristine').eq(1).click()
    //     cy.get('.btn-success').eq(1).click()
    //     cy.get('.btn-light').eq(0).click()
    //
    //     // Chọn Phân bổ CK
    //     cy.get('#dropdown').click()
    //     cy.get('.dropdown-i').eq(1).click()
    //     cy.get('#field-total-discount').type('50000')
    //     cy.get('#check-all').click({force: true})
    //     cy.get('.btn-success').eq(0).click()
    //     cy.get('.btn-outline-danger').eq(0).click()
    //
    //     // Click Lưu
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(100)
    //
    //     // //Lưu nếu có khàng hóa không thuộc hợp đồng
    //     cy.get('.modal ').then(elem => {
    //         if (cy.get('div').should('have.class', 'modal-dialog')) {
    //             cy.get('.btn-outline-success').click()
    //         }
    //         else {
    //         }
    //     })
    //     cy.wait(2000)
    // })

    // it('Testcase 05: Thêm mới chứng từ mua hàng ( TH chọn lập từ đơn mua hàng)', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     cy.wait(1000)
    //
    //     // Chọn Lập từ đơn mua hàng
    //     cy.get('.drop-down-button').eq(3).click()
    //     cy.wait(200)
    //     cy.get('.data-list').eq(0).click()
    //     cy.get('.drop-down-button').eq(4).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.set-height').click()
    //     cy.get('.custom-checkbox').eq(1).click({force: true})
    //     cy.get('.btn-primary').click()
    //     cy.wait(1000)
    //     cy.get('.drop-down-button').eq(6).click({force: true})
    //     cy.wait(100)
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.get('.drop-down-button').eq(7).click({force: true})
    //     cy.wait(100)
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.wait(100)
    //     cy.get('.button-navigation').eq(4).click()
    //     cy.wait(100)
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    //     cy.wait(2000)
    // })

    // it('Testcase 06: Thêm mới chứng từ mua hàng lập từ hóa đơn đầu vào', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     cy.wait(1000)
    //
    //     //Chọn hóa đơn đầu vào
    //     cy.get('#checkBox').click()
    //     cy.get('.selectVoucher').click()
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(4).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Chọn lấy dữ liệu
    //     cy.get('.btn-success').click({force: true})
    //     cy.wait(2000)
    //     //Chọn checkbox
    //     cy.get('.custom-checkbox').eq(1).click({force: true})
    //     cy.wait(100)
    //     //Chọn Đồng ý
    //     cy.get('.btn-eb').click()
    //     cy.wait(500)
    //     //Kho
    //     cy.get('.drop-down-button').eq(5).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KTP')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Nợ
    //     cy.get('.drop-down-button').eq(6).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1561')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Có
    //     cy.get('.drop-down-button').eq(7).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('331')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //
    //     // Nhập liệu tab Thống kê
    //     cy.get('.nav-link').eq(171).click()
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(7).click()
    //     cy.get('.data-list').eq(3).click({force: true})
    //     cy.get('.drop-down-button').eq(8).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(9).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.get('.drop-down-button').eq(10).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.wait(200)
    //
    //     cy.get('.button-navigation').eq(4).click()
    //     cy.wait(1000)
    //
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    //     cy.wait(2000)
    // })

    // it('Testcase 07: Thêm mới chứng từ mua hàng lập từ hợp đồng mua', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     cy.wait(1000)
    //
    //     // Chọn Lập từ hợp đồng mua
    //     cy.get('.drop-down-button').eq(3).click()
    //     cy.wait(200)
    //     cy.get('.data-list').eq(1).click()
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(4).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     cy.get('#checkbox0').click({force: true})
    //     cy.get('.btn-primary').click()
    //     cy.wait(100)
    //     cy.get('.drop-down-button').eq(7).click({force: true})
    //     cy.wait(100)
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.wait(100)
    //     cy.get('.button-navigation').eq(4).click()
    //     cy.wait(1000)
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    //     cy.wait(2000)
    // })

    // it('Testcase 08: Thêm mới chứng từ mua hàng thanh toán ngay bằng tiền mặt', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     cy.wait(1000)
    //     cy.get('.col-sm-2').eq(1).click({focus: true})
    //     cy.get('select').eq(0).select('Tiền mặt', {force: true}).should('have.value', '1: 211')
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Hạn thanh toán
    //     cy.get('input[name=dates]').eq(0).type('26/05/2022')
    //     //Chọn Nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Nhập Kèm theo
    //     cy.get('#number_attach').type('01')
    //     cy.wait(500)
    //
    //     // Nhập liệu tab Hàng tiền
    //     //Thêm dòng mới
    //     cy.get('#insertRow').click({force: true})
    //     cy.wait(100)
    //     //Chọn Mã hàng
    //     cy.get('.drop-down-button').eq(4).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('TP001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Chọn Kho
    //     cy.get('.drop-down-button').eq(5).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KTP')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //TK Nợ
    //     cy.get('.drop-down-button').eq(6).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1561')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //TK Có
    //     cy.get('.drop-down-button').eq(7).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1111')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Số lượng
    //     cy.get('#quantity0').type('{selectall}', {force: true}).type('5.36')
    //     //Đơn giá
    //     cy.get('#unitPrice0').type('{selectall}', {force: true}).type('500000')
    //     //Tỷ lệ CK
    //     cy.get('#discountRate0').type('{selectall}', {force: true}).type('2.6')
    //     //Chi phí mua
    //     cy.get('#freightAmount0').type('{selectall}', {force: true}).type('300000')
    //     //Số lô
    //     cy.get('#lotNo0').type('{selectall}', {force: true}).type('HHJG4459')
    //
    //     // chọn ngày trong calendar button ( Hạn dùng)
    //     cy.get('.btn-secondary').eq(4).click({force: true})
    //     cy.get('select').eq(3).select('Thg 12', {force: true}).should('have.value', '12')
    //     cy.get('select').eq(4).select('2022', {force: true}).should('have.value', '2022')
    //     cy.get('.btn-light').eq(10).click()
    //     // //Nhập Hạn dùng
    //     // cy.get('#expiryDate0').type('25/06/2022', {force: true})
    //     cy.wait(100)
    //
    //     // Chọn tab thuế
    //     cy.get('#Thue').click()
    //     cy.get('.drop-down-button').eq(9).click({force: true})
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.wait(200)
    //
    //     // Nhập liệu tab Thống kê
    //     cy.get('.nav-link').eq(171).click()
    //     //Chọn Khoản mục CP
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Đối tượng THCP
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Hợp đồng
    //     cy.get('.drop-down-button').eq(7).click()
    //     cy.get('.data-list').eq(2).click({force: true})
    //     //Chọn Mục thu/ chi
    //     cy.get('.drop-down-button').eq(8).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //chọn Phòng ban
    //     cy.get('.drop-down-button').eq(9).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Mã thống kê
    //     cy.get('.drop-down-button').eq(10).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.wait(200)
    //
    //     // Click Lưu
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(1000)
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    //     cy.wait(2000)
    // })

    // it('Testcase 09: Thêm mới chứng từ mua hàng thanh toán ngay bằng UNC', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     cy.wait(1000)
    //     cy.get('#field_typeid').select(2)
    //     cy.wait(100)
    //
    //    //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Nhập Hạn thanh toán
    //     cy.get('input[name=dates]').eq(0).type('26/05/2022')
    //     //Chọn Nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Kèm theo
    //     cy.get('#number_attach').type('01')
    //     cy.wait(500)
    //
    //     //Chọn tab Ủy nhiệm chi
    //     cy.contains('Ủy nhiệm chi').click()
    //     //Chọn TK trả
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn TK nhận
    //     // cy.get('.drop-down-button').eq(2).click()
    //     // cy.get('.data-list').eq(0).click()
    //
    //     // Nhập liệu tab Hàng tiền
    //     //Thêm dòng mới
    //     cy.get('#insertRow').click({force: true})
    //     cy.wait(100)
    //     //Chọn Mã hàng
    //     cy.get('.drop-down-button').eq(6).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('TP001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Chọn Kho
    //     cy.get('.drop-down-button').eq(7).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KHH')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //TK Nợ
    //     cy.get('.drop-down-button').eq(8).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1561')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //TK Có
    //     cy.get('.drop-down-button').eq(9).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1121')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Số lượng
    //     cy.get('#quantity0').type('{selectall}', {force: true}).type('5.36')
    //     //Đơn giá
    //     cy.get('#unitPrice0').type('{selectall}', {force: true}).type('500000')
    //     //Tỷ lệ CK
    //     cy.get('#discountRate0').type('{selectall}', {force: true}).type('2.6')
    //     //Chi phí mua
    //     cy.get('#freightAmount0').type('{selectall}', {force: true}).type('300000')
    //     //Số lô
    //     cy.get('#lotNo0').type('{selectall}', {force: true}).type('HHJG4459')
    //     //Nhập Hạn dùng
    //     cy.get('#expiryDate0').type('25/06/2022', {force: true})
    //     cy.wait(100)
    //
    //     // Chọn tab thuế
    //     cy.get('#Thue').click()
    //     cy.get('.drop-down-button').eq(11).click({force: true})
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.wait(200)
    //
    //     // Nhập liệu tab Thống kê
    //     cy.get('.nav-link').eq(171).click()
    //     //Chọn Khoản mục CP
    //     cy.get('.drop-down-button').eq(7).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Đối tượng THCP
    //     cy.get('.drop-down-button').eq(8).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Hợp đồng
    //     cy.get('.drop-down-button').eq(9).click()
    //     cy.get('.data-list').eq(2).click({force: true})
    //     //Chọn Mục thu/ chi
    //     cy.get('.drop-down-button').eq(10).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //chọn Phòng ban
    //     cy.get('.drop-down-button').eq(11).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Mã thống kê
    //     cy.get('.drop-down-button').eq(12).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.wait(200)
    //
    //     // Click Lưu
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(1000)
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    //     cy.wait(2000)
    // })

    // it('Testcase 20: Sửa chứng từ mua hàng đã có liên kết với hàng mua trả lại', () => {
    //     //Lập chứng từ mua hàng mới
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     cy.wait(2000)
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Hạn thanh toán
    //     cy.get('input[name=dates]').eq(0).type('26/05/2022')
    //     //Chọn Nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Kèm theo
    //     cy.get('#number_attach').type('01')
    //     cy.wait(500)
    //     // Nhập liệu tab Hàng tiền
    //     //Thêm dòng mới
    //     cy.get('#insertRow').click({force: true})
    //     cy.wait(100)
    //     //Chọn Mã hàng
    //     cy.get('.drop-down-button').eq(4).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('TP001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Chọn Kho
    //     cy.get('.drop-down-button').eq(5).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KHH')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //TK Nợ
    //     cy.get('#debitAccount0').type('{selectall}', {force: true}).type('1561', {force: true})
    //     //TK Có
    //     cy.get('#creditAccount0').type('{selectall}', {force: true}).type('331', {force: true})
    //     //Số lượng
    //     cy.get('#quantity0').type('{selectall}', {force: true}).type('10')
    //     //Đơn giá
    //     cy.get('#unitPrice0').type('{selectall}', {force: true}).type('500000')
    //     //Tỷ lệ CK
    //     cy.get('#discountRate0').type('{selectall}', {force: true}).type('2.6')
    //     //Chi phí mua
    //     cy.get('#freightAmount0').type('{selectall}', {force: true}).type('300000')
    //     //Số lô
    //     cy.get('#lotNo0').type('{selectall}', {force: true}).type('HHJG4459')
    //     // chọn ngày trong calendar button ( Hạn dùng)
    //     cy.get('.btn-secondary').eq(4).click({force: true})
    //     cy.get('select').eq(3).select('Thg 12', {force: true}).should('have.value', '12')
    //     cy.get('select').eq(4).select('2022', {force: true}).should('have.value', '2022')
    //     cy.get('.btn-light').eq(10).click()
    //     cy.wait(100)
    //     // Chọn tab thuế
    //     cy.get('#Thue').click()
    //     cy.get('.drop-down-button').eq(9).click({force: true})
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.wait(200)
    //     // Nhập liệu tab Thống kê
    //     cy.get('.nav-link').eq(171).click()
    //     //Chọn Khoản mục CP
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Đối tượng THCP
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Hợp đồng
    //     cy.get('.drop-down-button').eq(7).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Mục thu/ chi
    //     cy.get('.drop-down-button').eq(8).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //chọn Phòng ban
    //     cy.get('.drop-down-button').eq(9).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Mã thống kê
    //     cy.get('.drop-down-button').eq(10).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.wait(200)
    //     // Click Lưu
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(1000)
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     })
    //     cy.wait(2000)
    //
    //     //Lập chứng từ hàng mua trả lại lập từ chứng từ mua hàng
    //     cy.viewport(1500, 880)
    //     // // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     // window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     cy.visit('https://app.easybooks.vn/#/hang-mua/tra-lai/new')
    //     cy.wait(5000)
    //     //Bỏ lập kèm hóa đơn
    //     cy.get('#isBill').invoke('prop', 'checked').then(elem => {
    //         if (elem === true) {
    //             cy.get('#isBill').uncheck({force: true})
    //         } else {
    //         }
    //     })
    //
    //     //    Chọn Lập từ chứng từ mua hàng
    //     cy.get('#PPInvoice').click({force: true})
    //     cy.wait(200)
    //     //Chọn NCC
    //     cy.get('.drop-down-button').eq(3).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //CHọn đồng ý
    //     cy.get('#okman').click()
    //     cy.wait(500)
    //     //Chọn mã hàng đầu tiên
    //     cy.get('.jsgrid-align-center').eq(0).click()
    //     //Nhập số lượng trả lại
    //     cy.get('.jsgrid-align').eq(1).type('{selectall}').type('1')
    //     //Click đồng ý
    //     cy.get('.btn-eb').click()
    //     //    Chọn tab thuế
    //     cy.get('.nav-item').eq(172).click()
    //     //    CHọn TKĐƯ thuế GTGT
    //     cy.get('.drop-down-button').eq(9).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('331')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     cy.wait(200)
    //     //    Click Lưu chứng từ
    //     cy.get('.button-navigation').eq(2).click()
    //     cy.wait(2000)
    //
    //     //Bỏ ghi sổ chứng từ mua hàng đã có liên kết với hàng mua trả lại
    //     // cy.viewport(1500, 880)
    //     // window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang')
    //     cy.wait(2000)
    //     //Chọn chứng từ trên màn danh sách chứng từ mua hàng
    //     cy.get('.voucher-table > table > tbody > tr').eq(0).dblclick()
    //     cy.wait(1000)
    //     //Click Bỏ ghi sổ
    //     cy.get('.button-navigation').eq(6).click()
    //     //    Click Đồng ý ở popup thông báo đã có phát sinh
    //     cy.contains('Đồng ý').click()
    //
    //     //    Click Sửa chứng từ
    //     cy.get('.button-navigation').eq(3).click()
    //     //    thay đổi giá trị đơn giá
    //     cy.get('#quantity0').type('{selectall}',{force: true}).type('2')
    //     // Click Lưu
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(1000)
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     })
    //     cy.wait(2000)
    // })

    // it('Testcase 21: Sửa chứng từ mua hàng đã có liên kết với hàng mua giảm giá', () => {
    //     //Lập chứng từ mua hàng mới
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     cy.wait(2000)
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Hạn thanh toán
    //     cy.get('input[name=dates]').eq(0).type('26/05/2022')
    //     //Chọn Nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập Kèm theo
    //     cy.get('#number_attach').type('01')
    //     cy.wait(500)
    //     // Nhập liệu tab Hàng tiền
    //     //Thêm dòng mới
    //     cy.get('#insertRow').click({force: true})
    //     cy.wait(100)
    //     //Chọn Mã hàng
    //     cy.get('.drop-down-button').eq(4).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('TP001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //Chọn Kho
    //     cy.get('.drop-down-button').eq(5).click({force: true})
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('KHH')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //TK Nợ
    //     cy.get('#debitAccount0').type('{selectall}', {force: true}).type('1561', {force: true})
    //     //TK Có
    //     cy.get('#creditAccount0').type('{selectall}', {force: true}).type('331', {force: true})
    //     //Số lượng
    //     cy.get('#quantity0').type('{selectall}', {force: true}).type('10')
    //     //Đơn giá
    //     cy.get('#unitPrice0').type('{selectall}', {force: true}).type('500000')
    //     //Tỷ lệ CK
    //     cy.get('#discountRate0').type('{selectall}', {force: true}).type('2.6')
    //     //Chi phí mua
    //     cy.get('#freightAmount0').type('{selectall}', {force: true}).type('300000')
    //     //Số lô
    //     cy.get('#lotNo0').type('{selectall}', {force: true}).type('HHJG4459')
    //     // chọn ngày trong calendar button ( Hạn dùng)
    //     cy.get('.btn-secondary').eq(4).click({force: true})
    //     cy.get('select').eq(3).select('Thg 12', {force: true}).should('have.value', '12')
    //     cy.get('select').eq(4).select('2022', {force: true}).should('have.value', '2022')
    //     cy.get('.btn-light').eq(10).click()
    //     cy.wait(100)
    //     // Chọn tab thuế
    //     cy.get('#Thue').click()
    //     cy.get('.drop-down-button').eq(9).click({force: true})
    //     cy.get('.data-list').eq(1).click({force: true})
    //     cy.wait(200)
    //     // Nhập liệu tab Thống kê
    //     cy.get('.nav-link').eq(171).click()
    //     //Chọn Khoản mục CP
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Đối tượng THCP
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Hợp đồng
    //     cy.get('.drop-down-button').eq(7).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Mục thu/ chi
    //     cy.get('.drop-down-button').eq(8).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //chọn Phòng ban
    //     cy.get('.drop-down-button').eq(9).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     //Chọn Mã thống kê
    //     cy.get('.drop-down-button').eq(10).click()
    //     cy.get('.data-list').eq(0).click({force: true})
    //     cy.wait(200)
    //     // Click Lưu
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(1000)
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     })
    //     cy.wait(2000)
    //
    //     // Lập chứng từ hàng mua trả lại lập từ chứng từ mua hàng
    //     // cy.viewport(1500, 880)
    //     // // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     // window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     cy.visit('https://app.easybooks.vn/#/hang-mua/giam-gia/new')
    //     cy.wait(5000)
    //     //    Chọn Lập từ chứng từ mua hàng
    //     cy.get('.drop-down-button').eq(3).click({force: true})
    //     cy.get('.data-list').eq(0).click()
    //     cy.wait(200)
    //     //Chọn NCC
    //     cy.get('.drop-down-button').eq(4).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //CHọn đồng ý
    //     cy.get('#okman').click()
    //     cy.wait(500)
    //     //Chọn mã hàng đầu tiên
    //     cy.get('.jsgrid-align-center').eq(0).click()
    //     //Click đồng ý
    //     cy.get('.btn-eb').click()
    //     //Nhập số lượng
    //     cy.get('#quantity0').type('{selectall}').type('1')
    //     cy.get('#unitPriceOriginal0').type('{selectall}').type('250000')
    //     //    Chọn tab thuế
    //     cy.get('.nav-item').eq(172).click()
    //     //    CHọn TKĐƯ thuế GTGT
    //     cy.get('.drop-down-button').eq(10).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('331')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     cy.wait(200)
    //     //    Click Lưu chứng từ
    //     cy.get('.button-navigation').eq(2).click()
    //     cy.wait(2000)
    //
    //     //Bỏ ghi sổ chứng từ mua hàng đã có liên kết với hàng mua trả lại
    //     // cy.viewport(1500, 880)
    //     // window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang')
    //     cy.wait(2000)
    //     //Chọn chứng từ trên màn danh sách chứng từ mua hàng
    //     cy.get('.voucher-table > table > tbody > tr').eq(0).dblclick()
    //     cy.wait(1000)
    //     //Click Bỏ ghi sổ
    //     cy.get('.button-navigation').eq(6).click()
    //     //    Click Đồng ý ở popup thông báo đã có phát sinh
    //     cy.contains('Đồng ý').click()
    //
    //     //    Click Sửa chứng từ
    //     cy.get('.button-navigation').eq(3).click()
    //     //    thay đổi giá trị đơn giá
    //     cy.get('#unitPrice0').type('{selectall}',{force: true}).type('236000')
    //     // Click Lưu
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(1000)
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     })
    //     cy.wait(2000)
    // })

    // it('Testcase 22: Sửa chứng từ mua hàng đã trả tiền NCC', () => {
    //     // //Lập chứng từ mua hàng mới
    //     //     // thay đổi kích thước màn hình
    //     //     cy.viewport(1500, 880)
    //     //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang/new')
    //     //     cy.wait(2000)
    //     //     // Nhập liệu thông tin chung
    //     //     //Chọn Nhà cung cấp
    //     //     cy.get('.drop-down-button').eq(0).click()
    //     //     cy.get('.data-list').each($item => {
    //     //         if ($item.text().includes('NCC001')) {
    //     //             cy.wrap($item).click()
    //     //         }
    //     //     })
    //     //     //Nhập Hạn thanh toán
    //     //     cy.get('input[name=dates]').eq(0).type('26/05/2022')
    //     //     //Chọn Nhân viên
    //     //     cy.get('.drop-down-button').eq(1).click()
    //     //     cy.get('.data-list').each($item => {
    //     //         if ($item.text().includes('NV001')) {
    //     //             cy.wrap($item).click()
    //     //         }
    //     //     })
    //     //     //Nhập Kèm theo
    //     //     cy.get('#number_attach').type('01')
    //     //     cy.wait(500)
    //     //     // Nhập liệu tab Hàng tiền
    //     //     //Thêm dòng mới
    //     //     cy.get('#insertRow').click({force: true})
    //     //     cy.wait(100)
    //     //     //Chọn Mã hàng
    //     //     cy.get('.drop-down-button').eq(4).click({force: true})
    //     //     cy.get('.data-list').each($item => {
    //     //         if ($item.text().includes('TP001')) {
    //     //             cy.wrap($item).click({force: true})
    //     //         }
    //     //     })
    //     //     //Chọn Kho
    //     //     cy.get('.drop-down-button').eq(5).click({force: true})
    //     //     cy.get('.data-list').each($item => {
    //     //         if ($item.text().includes('KHH')) {
    //     //             cy.wrap($item).click({force: true})
    //     //         }
    //     //     })
    //     //     //TK Nợ
    //     //     cy.get('#debitAccount0').type('{selectall}', {force: true}).type('1561', {force: true})
    //     //     //TK Có
    //     //     cy.get('#creditAccount0').type('{selectall}', {force: true}).type('331', {force: true})
    //     //     //Số lượng
    //     //     cy.get('#quantity0').type('{selectall}', {force: true}).type('10')
    //     //     //Đơn giá
    //     //     cy.get('#unitPrice0').type('{selectall}', {force: true}).type('500000')
    //     //     //Tỷ lệ CK
    //     //     cy.get('#discountRate0').type('{selectall}', {force: true}).type('2.6')
    //     //     //Chi phí mua
    //     //     cy.get('#freightAmount0').type('{selectall}', {force: true}).type('300000')
    //     //     //Số lô
    //     //     cy.get('#lotNo0').type('{selectall}', {force: true}).type('HHJG4459')
    //     //     // chọn ngày trong calendar button ( Hạn dùng)
    //     //     cy.get('.btn-secondary').eq(4).click({force: true})
    //     //     cy.get('select').eq(3).select('Thg 12', {force: true}).should('have.value', '12')
    //     //     cy.get('select').eq(4).select('2022', {force: true}).should('have.value', '2022')
    //     //     cy.get('.btn-light').eq(10).click()
    //     //     cy.wait(100)
    //     //     // Chọn tab thuế
    //     //     cy.get('#Thue').click()
    //     //     cy.get('.drop-down-button').eq(9).click({force: true})
    //     //     cy.get('.data-list').eq(1).click({force: true})
    //     //     cy.wait(200)
    //     //     // Nhập liệu tab Thống kê
    //     //     cy.get('.nav-link').eq(171).click()
    //     //     //Chọn Khoản mục CP
    //     //     cy.get('.drop-down-button').eq(5).click()
    //     //     cy.get('.data-list').eq(0).click({force: true})
    //     //     //Chọn Đối tượng THCP
    //     //     cy.get('.drop-down-button').eq(6).click()
    //     //     cy.get('.data-list').eq(0).click({force: true})
    //     //     //Chọn Hợp đồng
    //     //     cy.get('.drop-down-button').eq(7).click()
    //     //     cy.get('.data-list').eq(0).click({force: true})
    //     //     //Chọn Mục thu/ chi
    //     //     cy.get('.drop-down-button').eq(8).click()
    //     //     cy.get('.data-list').eq(0).click({force: true})
    //     //     //chọn Phòng ban
    //     //     cy.get('.drop-down-button').eq(9).click()
    //     //     cy.get('.data-list').eq(0).click({force: true})
    //     //     //Chọn Mã thống kê
    //     //     cy.get('.drop-down-button').eq(10).click()
    //     //     cy.get('.data-list').eq(0).click({force: true})
    //     //     cy.wait(200)
    //     //     // Click Lưu
    //     //     cy.get('.mdi-briefcase-download').click()
    //     //     cy.wait(1000)
    //     //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     //     cy.get("body").then($body => {
    //     //         if ($body.find('.modal ').length > 0) {
    //     //             cy.get('.modal ').then(elem => {
    //     //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //     //                     cy.get('.btn-outline-success').click()
    //     //                 } else {
    //     //                 }
    //     //             })
    //     //         }
    //     //     })
    //     //     cy.wait(2000)
    //
    //     // // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/tra-tien-nha-cung-cap')
    //     cy.wait(2000)
    //     //chọn dòng đối tượng đầu tiên
    //     cy.get('.voucher-table > table > tbody > tr').eq(0).dblclick()
    //     cy.get('#checkbox0').check({force: true})
    //     cy.get('[tabindex= 25]').type('{selectall}').type('100000')
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.get('.btn-outline-dark').click({force: true})
    //     cy.wait(2000)
    //
    //     //Đến màn chứng từ mua hàng
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang')
    //     cy.wait(2000)
    //     cy.get('.voucher-table > table > tbody > tr').eq(0).dblclick()
    //     cy.wait(1000)
    //     cy.get('.button-navigation').eq(6).click()
    //     cy.wait(500)
    //     cy.get('.btn-eb').click()
    //     // cy.wait(5000)
    //     // cy.get('.button-navigation').eq(3).click({force: true})
    //     // cy.wait(200)
    //     // cy.get('#insertRow').click({force: true})
    //
    // })
    //Testcase 12: đang lỗi chức năng bỏ ghi sổ chứng từ mua hàng đã trả tiền NCC nên không thực hiện được testcae này

    // it('Testcase 23: Sửa chứng từ mua hàng ', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/chung-tu-mua-hang')
    //     cy.wait(2000)
    //     cy.get('.voucher-table > table > tbody > tr').eq(0).dblclick()
    //     // cy.get('.button-navigation')
    //     cy.wait(500)
    //
    //     //Nếu đang ghi sổ thì bỏ ghi sổ và click Sửa, nếu không thì click Sửa
    //     cy.get('.button-navigation').eq(6).then(elem => {
    //         // elem is a jQuery object
    //         console.log(elem.text());
    //         console.log(elem.text().toString());
    //         if (elem.text().toString().trim() === 'Bỏ ghi sổ') {
    //             cy.get('.button-navigation').eq(6).click({force: true})
    //             cy.wait(1000)
    //             cy.get('.button-navigation').eq(3).click({force: true})
    //         } else {
    //             cy.get('.button-navigation').eq(3).click({force: true})
    //         }
    //     })
    //
    //     // Thay đổi đơn giá
    //     cy.get('#unitPrice0').type('{selectall}', {force: true}).type('120000')
    //
    //     // Click Lưu
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(1000)
    //     //Nếu có mã hàng khác mã hàng trên hợp đồng thì click Lưu trên popup
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal ').length > 0) {
    //             cy.get('.modal ').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-dialog')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    //     cy.wait(2000)
    // })

})

describe('NHẬN HÓA ĐƠN', () => {
    // it('Testcase01: Nhận hóa đơn chứng từ mua hàng', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/nhan-hoa-don')
    //     cy.wait(2000)
    //
    //     //    chọn đối tượng
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn Loại chứng từ
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('Chứng từ mua hàng')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //    Chọn từ ngày
    //     cy.get('.input-group').eq(0).type('01/10/2021')
    //     //    click Lấy dữ liệu
    //     cy.get('.btn-success').click()
    //     //    Chọn chứng từ đầu tiên
    //     cy.get('#checkboxtable0').check({force:true})
    //     //Chọn mẫu số hóa đơn
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('01/')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    // //    Nhập ký hiệu hóa đơn
    //     cy.get('#invoiceSeries').type('KT/21T')
    // //    Nhập số hóa đơn
    //     cy.get('#invoiceNo').type('0000212')
    // //    CHọn  nhóm HHDV mua vào
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('2')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Đồng ý
    //     cy.get('.button-navigation').eq(0).click()
    //     cy.wait(2000)
    // })

    // it('Testcase02: Nhận hóa đơn  nhiều chứng từ mua hàng', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/nhan-hoa-don')
    //     cy.wait(2000)
    //
    //     //    chọn đối tượng
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn Loại chứng từ
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('Chứng từ mua hàng')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //    Chọn từ ngày
    //     cy.get('.input-group').eq(0).type('01/10/2021')
    //     //    click Lấy dữ liệu
    //     cy.get('.btn-success').click()
    //     //    Chọn chứng từ đầu tiên
    //     cy.get('#checkboxtable0').check({force:true})
    //     cy.get('#checkboxtable1').check({force:true})
    //     cy.get('#checkboxtable2').check({force:true})
    //     //Chọn % thuế
    //     cy.get('.drop-down-button').eq(3).click()
    //     cy.get('.data-list').eq(1).click()
    //     //Chọn mẫu số hóa đơn
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('01/')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //    Nhập ký hiệu hóa đơn
    //     cy.get('#invoiceSeries').type('KT/21T')
    //     //    Nhập số hóa đơn
    //     cy.get('#invoiceNo').type('0000212')
    //     //    CHọn  nhóm HHDV mua vào
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('2')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Đồng ý
    //     cy.get('.button-navigation').eq(0).click()
    //     cy.wait(3000)
    // })

    // it('Testcase03: Nhận hóa đơn  mua dịch vụ', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/nhan-hoa-don')
    //     cy.wait(2000)
    //
    //     //    chọn đối tượng
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn Loại chứng từ
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('Mua dịch vụ')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //    Chọn từ ngày
    //     cy.get('.input-group').eq(0).type('01/10/2021')
    //     //    click Lấy dữ liệu
    //     cy.get('.btn-success').click()
    //     //    Chọn chứng từ đầu tiên
    //     cy.get('#checkboxtable0').check({force:true})
    //     //Chọn % thuế
    //     cy.get('.drop-down-button').eq(3).click()
    //     cy.get('.data-list').eq(1).click()
    //     //Chọn mẫu số hóa đơn
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('01/')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //    Nhập ký hiệu hóa đơn
    //     cy.get('#invoiceSeries').type('KT/21T')
    //     //    Nhập số hóa đơn
    //     cy.get('#invoiceNo').type('0000212')
    //     //    CHọn  nhóm HHDV mua vào
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('2')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Đồng ý
    //     cy.get('.button-navigation').eq(0).click()
    //     cy.screenshot()
    // })

    // it('Testcase04: Nhận hóa đơn  nhiều mua dịch vụ', () => {
    //     // thay đổi kích thước màn hình
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjM4NjE1MTMxLCJpYXQiOjE2MzYwMjMxMzF9.13CubbVuH_tUek-DczwiXK6J18ASmV6etwJlkNbLvWpGiysQBlwiDnplUHUo3bswtRVFGros62Y4vARwqxBaMw"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/nhan-hoa-don')
    //     cy.wait(2000)
    //
    //     //    chọn đối tượng
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn Loại chứng từ
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('Mua dịch vụ')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //    Chọn từ ngày
    //     cy.get('.input-group').eq(0).type('01/10/2021')
    //     //    click Lấy dữ liệu
    //     cy.get('.btn-success').click()
    //     //    Chọn chứng từ đầu tiên
    //     cy.get('#checkboxtable0').check({force:true})
    //     cy.get('#checkboxtable1').check({force:true})
    //     cy.get('#checkboxtable2').check({force:true})
    //     //Chọn % thuế
    //     cy.get('.drop-down-button').eq(3).click()
    //     cy.get('.data-list').eq(1).click()
    //     //Chọn mẫu số hóa đơn
    //     cy.get('.drop-down-button').eq(5).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('01/')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //    Nhập ký hiệu hóa đơn
    //     cy.get('#invoiceSeries').type('KT/21T')
    //     //    Nhập số hóa đơn
    //     cy.get('#invoiceNo').type('0000212')
    //     //    CHọn  nhóm HHDV mua vào
    //     cy.get('.drop-down-button').eq(6).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('2')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Đồng ý
    //     cy.get('.button-navigation').eq(0).click()
    //     cy.wait(3000)
    // })
})

describe('Mua dịch vụ', () => {
    // it('Testcase 01: Thêm mới chứng từ mua dịch vụ', () => {
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQzNTI4OTExLCJpYXQiOjE2NDA5MzY5MTF9.T3UBNy0xDUV5EieYRJ2KIJ9Y8g9iYlcwSyw4m6l-VimbXWDv6BD_t6o5PnVIWTmfH-i_H-k_5hXYvc5Do_R5-A"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/mua-dich-vu/new')
    //
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập hạn thanh toán
    //     cy.get('.last-div-special-long').eq(0).type('14/05/2022')
    //     //chọn nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV002')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //
    //     //Nhập chi tiết hàng tiền
    //     // Chọn thêm dòng mới
    //     cy.get('.jsgrid-cell').eq(0).click()
    //     //Chọn mã hàng
    //     cy.get('.mdi-chevron-down').eq(4).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('DV01')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.wait(200)
    //     //Chọn TK Nợ
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1562')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập số lượng
    //     cy.get('[tabindex = 24]').type('{selectall}').type('12')
    //     //Nhập đơn giá
    //     cy.get('[tabindex = 25]').type('{selectall}').type('20000')
    //     // //Nhập tỷ lệ CK
    //     cy.get('[tabindex = 34]').type('{selectall}', {force: true}).type('0.25')
    //
    //     //Chọn tab Thuế
    //     cy.get('.nav-item').eq(172).click()
    //     cy.wait(200)
    //     //Nhập % thuế GTGT
    //     cy.get('[tabindex = 23]').type('10%')
    //
    //     //Chọn tab Thống kê
    //     cy.get('.nav-item').eq(173).click()
    //     //chọn Khoản mục CP
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.get('.data-list').eq(0).click()
    //     //chọn Đối tượng THCP
    //     cy.get('.mdi-chevron-down').eq(6).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Hợp đồng
    //     cy.get('.mdi-chevron-down').eq(7).click()
    //     cy.get('.data-list').eq(0).click()
    //     //CHọn Mục thu/chi
    //     cy.get('.mdi-chevron-down').eq(8).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Phòng ban
    //     cy.get('.mdi-chevron-down').eq(9).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Mã thống kê
    //     cy.get('.mdi-chevron-down').eq(10).click()
    //     cy.get('.data-list').eq(0).click()
    //
    //     //Click Lưu
    //     cy.get('.button-navigation').eq(4).click()
    //     cy.wait(500)
    //     //Nếu có thông báo mã hàng không thuộc hợp đồng thì click Lưu
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal').length > 0) {
    //             cy.get('.modal').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-content')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    // })

    // it('Testcase 02: Thêm mới chứng từ mua dịch vụ có nhận hóa đơn', () => {
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQzNTI4OTExLCJpYXQiOjE2NDA5MzY5MTF9.T3UBNy0xDUV5EieYRJ2KIJ9Y8g9iYlcwSyw4m6l-VimbXWDv6BD_t6o5PnVIWTmfH-i_H-k_5hXYvc5Do_R5-A"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/mua-dich-vu/new')
    //
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập hạn thanh toán
    //     cy.get('.last-div-special-long').eq(0).type('14/05/2022')
    //     //chọn nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV002')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //
    //     //tích chọn đã nhận hóa đơn
    //     cy.get('#pp-service-recorded').click()
    //
    //     //Nhập chi tiết hàng tiền
    //     // Chọn thêm dòng mới
    //     cy.get('.jsgrid-cell').eq(0).click()
    //     //Chọn mã hàng
    //     cy.get('.mdi-chevron-down').eq(4).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('DV01')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.wait(200)
    //     //Chọn TK Nợ
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1562')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập số lượng
    //     cy.get('[tabindex = 24]').type('{selectall}').type('12')
    //     //Nhập đơn giá
    //     cy.get('[tabindex = 25]').type('{selectall}').type('20000')
    //     // //Nhập tỷ lệ CK
    //     cy.get('[tabindex = 34]').type('{selectall}', {force: true}).type('0.25')
    //
    //     //Chọn tab Thuế
    //     cy.get('.nav-item').eq(172).click()
    //     cy.wait(200)
    //     //Nhập % thuế GTGT
    //     cy.get('[tabindex = 23]').type('10%',{force: true})
    //     //nhập mẫu số hóa đơn
    //     cy.get('[tabindex = 28]').type('01/')
    //     //Nhập ký hiệu hóa đơn
    //     cy.get('[tabindex = 29]').type('KT/21T',{force: true})
    //     //Nhập số hóa đơn
    //     cy.get('#invoiceNo0').type('0000004',{force: true})
    //
    //     //Chọn tab Thống kê
    //     cy.get('.nav-item').eq(173).click()
    //     //chọn Khoản mục CP
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.get('.data-list').eq(0).click()
    //     //chọn Đối tượng THCP
    //     cy.get('.mdi-chevron-down').eq(6).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Hợp đồng
    //     cy.get('.mdi-chevron-down').eq(7).click()
    //     cy.get('.data-list').eq(0).click()
    //     //CHọn Mục thu/chi
    //     cy.get('.mdi-chevron-down').eq(8).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Phòng ban
    //     cy.get('.mdi-chevron-down').eq(9).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Mã thống kê
    //     cy.get('.mdi-chevron-down').eq(10).click()
    //     cy.get('.data-list').eq(0).click()
    //
    //     //Click Lưu
    //     cy.get('.button-navigation').eq(4).click()
    //     cy.wait(500)
    //     //Nếu có thông báo mã hàng không thuộc hợp đồng thì click Lưu
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal').length > 0) {
    //             cy.get('.modal').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-content')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    // })

    // it('Testcase 03: Thêm mới chứng từ mua dịch vụ có nhận hóa đơn, nhiều dòng mã hàng', () => {
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQzNTI4OTExLCJpYXQiOjE2NDA5MzY5MTF9.T3UBNy0xDUV5EieYRJ2KIJ9Y8g9iYlcwSyw4m6l-VimbXWDv6BD_t6o5PnVIWTmfH-i_H-k_5hXYvc5Do_R5-A"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/mua-dich-vu/new')
    //
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập hạn thanh toán
    //     cy.get('.last-div-special-long').eq(0).type('14/05/2022')
    //     //chọn nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV002')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //
    //     //tích chọn đã nhận hóa đơn
    //     cy.get('#pp-service-recorded').click()
    //
    //     //Nhập chi tiết hàng tiền
    //     // Chọn thêm dòng mới
    //     cy.get('.jsgrid-cell').eq(0).click()
    //     //Chọn mã hàng
    //     cy.get('.mdi-chevron-down').eq(4).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('DV01')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.wait(200)
    //     //Chọn TK Nợ
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1562')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập số lượng
    //     cy.get('[tabindex = 24]').type('{selectall}').type('12')
    //     //Nhập đơn giá
    //     cy.get('[tabindex = 25]').type('{selectall}').type('20000')
    //     // //Nhập tỷ lệ CK
    //     cy.get('[tabindex = 34]').type('{selectall}', {force: true}).type('0.25')
    //
    //     //Chọn tab Thuế
    //     cy.get('.nav-item').eq(172).click()
    //     cy.wait(200)
    //     //Nhập % thuế GTGT
    //     cy.get('[tabindex = 23]').type('10%',{force: true})
    //     //nhập mẫu số hóa đơn
    //     cy.get('[tabindex = 28]').type('01/')
    //     //Nhập ký hiệu hóa đơn
    //     cy.get('[tabindex = 29]').type('KT/21T',{force: true})
    //     //Nhập số hóa đơn
    //     cy.get('#invoiceNo0').type('0000004',{force: true})
    //
    //     //Chọn tab Thống kê
    //     cy.get('.nav-item').eq(173).click()
    //     //chọn Khoản mục CP
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.get('.data-list').eq(0).click()
    //     //chọn Đối tượng THCP
    //     cy.get('.mdi-chevron-down').eq(6).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Hợp đồng
    //     cy.get('.mdi-chevron-down').eq(7).click()
    //     cy.get('.data-list').eq(0).click()
    //     //CHọn Mục thu/chi
    //     cy.get('.mdi-chevron-down').eq(8).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Phòng ban
    //     cy.get('.mdi-chevron-down').eq(9).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Mã thống kê
    //     cy.get('.mdi-chevron-down').eq(10).click()
    //     cy.get('.data-list').eq(0).click()
    //
    //     //Chọn tab Hàng tiền
    //     cy.get('.nav-item').eq(171).click()
    //     //Chọn thêm dòng mới
    //     cy.get('.jsgrid-cell').eq(0).click()
    //     cy.wait(200)
    //     //chọn mã hàng
    //     cy.get('#ppsd-detail-material-goods-11').type('{selectall}').type('DV02')
    //     cy.get('.data-list').eq(0).click()
    //     //chọn tk nợ
    //     cy.get('.mdi-chevron-down').eq(11).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1561')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập số lượng
    //     cy.get('[tabindex = 48]').type('{selectall}').type('5')
    //     //Nhập đơn giá
    //     cy.get('[tabindex = 49]').type('{selectall}').type('53000')
    //     // //Nhập tỷ lệ CK
    //     cy.get('[tabindex = 58]').type('{selectall}', {force: true}).type('1.4')
    //
    //     //Click Lưu
    //     cy.get('.button-navigation').eq(4).click()
    //     cy.wait(500)
    //     //Nếu có thông báo mã hàng không thuộc hợp đồng thì click Lưu
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal').length > 0) {
    //             cy.get('.modal').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-content')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    // })

    // it('Testcase 04: Thêm mới chứng từ mua dịch vụ chọn là chi phí mua hàng, có nhiều dòng mã hàng, có nhập hóa đơn', () => {
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQzNTI4OTExLCJpYXQiOjE2NDA5MzY5MTF9.T3UBNy0xDUV5EieYRJ2KIJ9Y8g9iYlcwSyw4m6l-VimbXWDv6BD_t6o5PnVIWTmfH-i_H-k_5hXYvc5Do_R5-A"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     cy.visit('https://app.easybooks.vn/#/mua-dich-vu/new')
    //
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập hạn thanh toán
    //     cy.get('.last-div-special-long').eq(0).type('14/05/2022')
    //     //chọn nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV002')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //
    //     //tích chọn là chi phí mua hàng
    //     cy.get('#pp-service-is-feight-service').click()
    //     //Chọn đã nhận hóa đơn
    //     cy.get('#pp-service-recorded').click()
    //
    //     //Nhập chi tiết hàng tiền
    //     // Chọn thêm dòng mới
    //     cy.get('.jsgrid-cell').eq(0).click()
    //     //Chọn mã hàng
    //     cy.get('.mdi-chevron-down').eq(4).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('DV01')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.wait(200)
    //     //Chọn TK Nợ
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1562')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập số lượng
    //     cy.get('[tabindex = 24]').type('{selectall}').type('12')
    //     //Nhập đơn giá
    //     cy.get('[tabindex = 25]').type('{selectall}').type('20000')
    //     // //Nhập tỷ lệ CK
    //     cy.get('[tabindex = 34]').type('{selectall}', {force: true}).type('0.25')
    //
    //     //Chọn tab Thuế
    //     cy.get('.nav-item').eq(172).click()
    //     cy.wait(200)
    //     //Nhập % thuế GTGT
    //     cy.get('[tabindex = 23]').type('10%',{force: true})
    //     //nhập mẫu số hóa đơn
    //     cy.get('[tabindex = 28]').type('01/')
    //     //Nhập ký hiệu hóa đơn
    //     cy.get('[tabindex = 29]').type('KT/21T',{force: true})
    //     //Nhập số hóa đơn
    //     cy.get('#invoiceNo0').type('0000004',{force: true})
    //
    //     //Chọn tab Thống kê
    //     cy.get('.nav-item').eq(173).click()
    //     //chọn Khoản mục CP
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.get('.data-list').eq(0).click()
    //     //chọn Đối tượng THCP
    //     cy.get('.mdi-chevron-down').eq(6).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Hợp đồng
    //     cy.get('.mdi-chevron-down').eq(7).click()
    //     cy.get('.data-list').eq(0).click()
    //     //CHọn Mục thu/chi
    //     cy.get('.mdi-chevron-down').eq(8).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Phòng ban
    //     cy.get('.mdi-chevron-down').eq(9).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Mã thống kê
    //     cy.get('.mdi-chevron-down').eq(10).click()
    //     cy.get('.data-list').eq(0).click()
    //
    //     //Chọn tab Hàng tiền
    //     cy.get('.nav-item').eq(171).click()
    //     //Chọn thêm dòng mới (dòng 2)
    //     cy.get('.jsgrid-cell').eq(0).click()
    //     cy.wait(200)
    //     //chọn mã hàng
    //     cy.get('#ppsd-detail-material-goods-11').type('{selectall}').type('DV02')
    //     cy.wait(200)
    //     cy.get('.data-list').eq(0).click()
    //     //chọn tk nợ
    //     cy.get('.mdi-chevron-down').eq(11).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1561')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập số lượng
    //     cy.get('[tabindex = 48]').type('{selectall}').type('5')
    //     //Nhập đơn giá
    //     cy.get('[tabindex = 49]').type('{selectall}').type('53000')
    //     // //Nhập tỷ lệ CK
    //     cy.get('[tabindex = 58]').type('{selectall}', {force: true}).type('1.4')
    //
    //     //Chọn thêm dòng mới (dòng 3)
    //     cy.get('.jsgrid-cell').eq(0).click()
    //     cy.wait(200)
    //     //chọn mã hàng
    //     cy.get('#ppsd-detail-material-goods-12').type('{selectall}').type('DV03')
    //     cy.wait(200)
    //     cy.get('.data-list').eq(0).click()
    //     //chọn tk nợ
    //     cy.get('.mdi-chevron-down').eq(17).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('6112')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập số lượng
    //     cy.get('[tabindex = 72]').type('{selectall}').type('0.25')
    //     //Nhập đơn giá
    //     cy.get('[tabindex = 73]').type('{selectall}').type('142500')
    //     // //Nhập tỷ lệ CK
    //     cy.get('[tabindex = 58]').type('{selectall}', {force: true}).type('1.4')
    //
    //     //Click Lưu
    //     cy.get('.button-navigation').eq(4).click()
    //     cy.wait(500)
    //     //Nếu có thông báo mã hàng không thuộc hợp đồng thì click Lưu
    //     cy.get("body").then($body => {
    //         if ($body.find('.modal').length > 0) {
    //             cy.get('.modal').then(elem => {
    //                 if (cy.get('div').should('have.class', 'modal-content')) {
    //                     cy.get('.btn-outline-success').click()
    //                 } else {
    //                 }
    //             })
    //         }
    //     });
    // })

    // it('Testcase 05: Thêm mới chứng từ mua dịch vụ Lập từ đơn mua hàng', () => {
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQzNTI4OTExLCJpYXQiOjE2NDA5MzY5MTF9.T3UBNy0xDUV5EieYRJ2KIJ9Y8g9iYlcwSyw4m6l-VimbXWDv6BD_t6o5PnVIWTmfH-i_H-k_5hXYvc5Do_R5-A"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //
    //     //Lập đơn mua hàng gốc
    //     cy.visit('https://app.easybooks.vn/#/don-mua-hang/new')
    //     cy.wait(500)
    //     // Thêm mới đơn mua hàng
    //     cy.get('.drop-down-button').eq(0).click()
    //         cy.get('.data-list').each($item => {
    //             if ($item.text().includes('NCC001')) {
    //                 cy.wrap($item).click()
    //             }
    //         })
    //     cy.wait(100)
    //     // cy.get('#cbb').first().click()
    //     cy.get('#deliverDate').type('13/06/2022')
    //     cy.get('input[name=shippingPlace]').type('Hà Nội')
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.wait(1000)
    //     // cy.get('#cbb').first().click()
    //     cy.get('#insertRow').click()
    //     cy.get('#materialGoodsID0').type('DV01')
    //     cy.wait(100)
    //     cy.get('#cbb').first().click()
    //     cy.get('#amount0').type('{selectall}').type('50')
    //     cy.wait(100)
    //     cy.get('#unitPrice0').type('{selectall}').type('253000')
    //     cy.get('#discountRate0').type('{selectall}', {force: true}).type('1.36')
    //     cy.get('#vatRate0').type('5%', {force: true})
    //     cy.get('#cbb').first().click()
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(1000)
    //
    //     //đến màn thêm mới mua dịch vụ
    //     // cy.wait(500)
    //     cy.visit('https://app.easybooks.vn/#/mua-dich-vu/new')
    //     cy.get('.btn-outline-success').click()
    //     cy.wait(500)
    //
    //     //chọn lập từ đơn mua hàng
    //     cy.get('#muaDichVu-tab-pp-order').click()
    //     //Chọn NCC
    //     cy.get('.mdi-chevron-down').eq(4).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //chọn lấy dữ liệu
    //     cy.get('.btn-success').click()
    //     //CHọn dòng đầu tiên
    //     cy.get('.custom-control-label').eq(1).click({force: true})
    //     //Chọn đồng ý
    //     cy.get('.btn-primary').click()
    //     cy.wait(500)
    //     //Chọn TK Nợ
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.wait(100)
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1562')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn TK Có
    //     cy.get('.mdi-chevron-down').eq(6).click()
    //     cy.wait(100)
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('331')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn tab Thuế
    //     cy.get('.nav-link').eq(170).click()
    //     //CHọn TK thuế GTGT
    //     cy.get('.mdi-chevron-down').eq(9).click()
    //     cy.wait(100)
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1331')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Click Lưu
    //     cy.get('.button-navigation').eq(4).click()
    //     cy.wait(200)
    //     cy.contains('thành công')
    // })

    // it('Testcase 06: Thêm mới chứng từ mua dịch vụ Lập từ đơn mua hàng có hóa đơn', () => {
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQzNTI4OTExLCJpYXQiOjE2NDA5MzY5MTF9.T3UBNy0xDUV5EieYRJ2KIJ9Y8g9iYlcwSyw4m6l-VimbXWDv6BD_t6o5PnVIWTmfH-i_H-k_5hXYvc5Do_R5-A"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //
    //     //Lập đơn mua hàng gốc
    //     cy.visit('https://app.easybooks.vn/#/don-mua-hang/new')
    //     cy.wait(500)
    //     // Thêm mới đơn mua hàng
    //     cy.get('.drop-down-button').eq(0).click()
    //         cy.get('.data-list').each($item => {
    //             if ($item.text().includes('NCC001')) {
    //                 cy.wrap($item).click()
    //             }
    //         })
    //     cy.wait(100)
    //     // cy.get('#cbb').first().click()
    //     cy.get('#deliverDate').type('13/06/2022')
    //     cy.get('input[name=shippingPlace]').type('Hà Nội')
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.wait(1000)
    //     // cy.get('#cbb').first().click()
    //     cy.get('#insertRow').click()
    //     cy.get('#materialGoodsID0').type('DV01')
    //     cy.wait(100)
    //     cy.get('#cbb').first().click()
    //     cy.get('#amount0').type('{selectall}').type('50')
    //     cy.wait(100)
    //     cy.get('#unitPrice0').type('{selectall}').type('253000')
    //     cy.get('#discountRate0').type('{selectall}', {force: true}).type('1.36')
    //     cy.get('#vatRate0').type('5%', {force: true})
    //     cy.get('#cbb').first().click()
    //     //Thêm dòng 2
    //     cy.get('#insertRow').click()
    //     cy.get('#materialGoodsID1').type('{selectall}', {force: true}).type('DV02')
    //     cy.wait(100)
    //     cy.get('#cbb').first().click()
    //     cy.get('#amount1').type('{selectall}').type('10')
    //     cy.wait(100)
    //     cy.get('#unitPrice1').type('{selectall}').type('14000')
    //     cy.get('#discountRate1').type('{selectall}', {force: true}).type('1.5')
    //     cy.get('#vatRate1').type('5%', {force: true})
    //     cy.get('#cbb').first().click()
    //     cy.get('.mdi-briefcase-download').click()
    //     cy.wait(1000)
    //     //click Lưu
    //     cy.get('.mdi-briefcase-download').click({force: true})
    //     cy.wait(1000)
    //
    //     //đến màn thêm mới mua dịch vụ
    //     // cy.wait(500)
    //     cy.visit('https://app.easybooks.vn/#/mua-dich-vu/new')
    //     cy.get('.btn-outline-success').click()
    //     cy.wait(500)
    //
    //     //chọn lập từ đơn mua hàng
    //     cy.get('#muaDichVu-tab-pp-order').click()
    //     //Chọn NCC
    //     cy.get('.mdi-chevron-down').eq(4).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click({force: true})
    //         }
    //     })
    //     //chọn lấy dữ liệu
    //     cy.get('.btn-success').click()
    //     //CHọn dòng đầu tiên
    //     cy.get('.custom-control-label').eq(1).click({force: true})
    //     cy.get('.custom-control-label').eq(2).click({force: true})
    //     //Chọn đồng ý
    //     cy.get('.btn-primary').click()
    //     cy.wait(500)
    //     //Chọn đã nhận hóa đơn
    //     cy.get('#pp-service-recorded').click()
    //     //Chọn TK Nợ 1
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.wait(100)
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1562')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn TK Có 1
    //     cy.get('.mdi-chevron-down').eq(6).click()
    //     cy.wait(100)
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('331')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn TK Nợ 2
    //     cy.get('.mdi-chevron-down').eq(11).click()
    //     cy.wait(100)
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1562')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn TK Có 2
    //     cy.get('.mdi-chevron-down').eq(12).click()
    //     cy.wait(100)
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('331')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn tab Thuế
    //     cy.get('.nav-link').eq(170).click()
    //     //CHọn TK thuế GTGT 1
    //     cy.get('.mdi-chevron-down').eq(9).click()
    //     cy.wait(100)
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1331')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn Mẫu số hóa đơn 1
    //     cy.get('.mdi-chevron-down').eq(11).click({force: true})
    //     cy.wait(100)
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('01GTKT')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.wait(100)
    //     //Nhập Ký hiệu hóa đơn 1
    //     cy.get('#invoiceSeries0').type('KT/22P',{force: true})
    //     cy.wait(100)
    //     //Nhập số hóa đơn 1
    //     cy.get('#invoiceNo0').type('112012',{force: true})
    //     cy.wait(100)
    //     //CHọn TK thuế GTGT 2
    //     cy.get('.mdi-chevron-down').eq(18).click()
    //     cy.wait(100)
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1331')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Chọn Mẫu số hóa đơn 2
    //     cy.get('.mdi-chevron-down').eq(20).click({force: true})
    //     cy.wait(100)
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('01GTKT')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.wait(100)
    //     //Nhập Ký hiệu hóa đơn 2
    //     cy.get('#invoiceSeries1').type('KT/22P',{force: true})
    //     cy.wait(100)
    //     //Nhập số hóa đơn 2
    //     cy.get('#invoiceNo1').type('112012',{force: true})
    //     cy.wait(100)
    //
    //     //Click Lưu
    //     cy.get('.button-navigation').eq(4).click()
    //     cy.wait(200)
    //     cy.contains('thành công')
    // })

    // it('Testcase 07: Thêm mới chứng từ chọn chức năng phân bổ CK', () => {
    //     cy.viewport(1500, 880)
    //     // bỏ qua đăng nhập vào thêm mới chứng từ mua hàng
    //     window.localStorage.setItem('authenticationtoken', '"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWFAZ21haWwuY29tIiwib3JnIjoiODY3N2NjM2QtZGEwOC00ZmQ4LTg5M2YtNzE5N2E4MDZlNTUyIiwib3JnR2V0RGF0YSI6Ijg2NzdjYzNkLWRhMDgtNGZkOC04OTNmLTcxOTdhODA2ZTU1MiIsInllYXJXb3JrIjoiIiwiaXNEZXBlbmRlbnQiOiIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQzNTI4OTExLCJpYXQiOjE2NDA5MzY5MTF9.T3UBNy0xDUV5EieYRJ2KIJ9Y8g9iYlcwSyw4m6l-VimbXWDv6BD_t6o5PnVIWTmfH-i_H-k_5hXYvc5Do_R5-A"')
    //     // cy.setCookie('authenticationToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWF0cmFuMjMwMm5iQGdtYWlsLmNvbSIsIm9yZyI6ImM2ZTkzM2Y0LTM1YmYtNDY3MS05NzFmLTRhYTgxYzI5ZGE4ZSIsIm9yZ0dldERhdGEiOiJjNmU5MzNmNC0zNWJmLTQ2NzEtOTcxZi00YWE4MWMyOWRhOGUiLCJ5ZWFyV29yayI6IiIsImlzRGVwZW5kZW50IjoiIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYzODU4Mjg1MCwiaWF0IjoxNjM1OTkwODUwfQ.Pa0A_5S0jqkUb4UW1L78ycaGEU9TmZUgdwf82_qDoO-ycfGlgobKkBiJpbAUIezY4P-UOxW6cCluwHCXCZz9Yg')
    //     //Đường dẫn đến màn thêm mới
    //     cy.visit('https://app.easybooks.vn/#/mua-dich-vu/new')
    //     // Nhập liệu thông tin chung
    //     //Chọn Nhà cung cấp
    //     cy.get('.drop-down-button').eq(0).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NCC001')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập hạn thanh toán
    //     cy.get('.last-div-special-long').eq(0).type('14/05/2022')
    //     //chọn nhân viên
    //     cy.get('.drop-down-button').eq(1).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('NV002')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //
    //     //Nhập chi tiết hàng tiền
    //     // Chọn thêm dòng mới
    //     cy.get('.jsgrid-cell').eq(0).click()
    //     //Chọn mã hàng
    //     cy.get('.mdi-chevron-down').eq(4).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('DV01')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     cy.wait(200)
    //     //Chọn TK Nợ
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1562')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập số lượng
    //     cy.get('[tabindex = 24]').type('{selectall}').type('12')
    //     //Nhập đơn giá
    //     cy.get('[tabindex = 25]').type('{selectall}').type('20000')
    //
    //     //Chọn tab Thuế
    //     cy.get('.nav-item').eq(172).click()
    //     cy.wait(200)
    //     //Nhập % thuế GTGT
    //     cy.get('[tabindex = 23]').type('10%')
    //
    //     //Chọn tab Thống kê
    //     cy.get('.nav-item').eq(173).click()
    //     //chọn Khoản mục CP
    //     cy.get('.mdi-chevron-down').eq(5).click()
    //     cy.get('.data-list').eq(0).click()
    //     //chọn Đối tượng THCP
    //     cy.get('.mdi-chevron-down').eq(6).click()
    //     cy.get('.data-list').eq(0).click()
    //     // //Chọn Hợp đồng
    //     // cy.get('.mdi-chevron-down').eq(7).click()
    //     // cy.get('.data-list').eq(0).click()
    //     //CHọn Mục thu/chi
    //     cy.get('.mdi-chevron-down').eq(8).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Phòng ban
    //     cy.get('.mdi-chevron-down').eq(9).click()
    //     cy.get('.data-list').eq(0).click()
    //     //Chọn Mã thống kê
    //     cy.get('.mdi-chevron-down').eq(10).click()
    //     cy.get('.data-list').eq(0).click()
    //
    //     //Chọn tab Hàng tiền
    //     cy.get('#ngb-tab-0').click()
    //     cy.wait(200)
    //     //Chọn thêm dòng 2
    //     cy.get('.jsgrid-cell').eq(0).click()
    //     cy.wait(200)
    //     //Chọn mã hàng 2
    //     cy.get('#ppsd-detail-material-goods-11').type('{selectall}').type('DV02')
    //     cy.get('.data-list').eq(0).click()
    //     cy.wait(200)
    //     //Chọn TK Nợ 2
    //     cy.get('.mdi-chevron-down').eq(11).click()
    //     cy.get('.data-list').each($item => {
    //         if ($item.text().includes('1562')) {
    //             cy.wrap($item).click()
    //         }
    //     })
    //     //Nhập số lượng 2
    //     cy.get('[tabindex = 48]').type('{selectall}').type('15')
    //     //Nhập đơn giá 2
    //     cy.get('[tabindex = 49]').type('{selectall}').type('125300')
    //
    //     //Chọn tab Phân bổ CK
    //     cy.get('#muaDichVu-tab-discount-allocation').click()
    //     //Nhập tiền CK
    //     cy.get('#field-total-discount').type('{selectall}').type('23000')
    //     //Chọn loại phân bổ
    //     cy.get('[tabindex = 60003]').click()
    //     //Click chọn tất cả các dòng để phân bổ Ck
    //     cy.get('#check-all').click({force: true})
    //     //Click phân bổ
    //     cy.get('[tabindex = 60004]').click()
    //     //Click Đồng ý
    //     cy.get('.btn-outline-danger').click()
    //
    //     // Click Lưu
    //     cy.get('.button-navigation').eq(4).click()
    //     cy.wait(500)
    //     // //Nếu có thông báo mã hàng không thuộc hợp đồng thì click Lưu
    //     // cy.get("body").then($body => {
    //     //     if ($body.find('.modal').length > 0) {
    //     //         cy.get('.modal').then(elem => {
    //     //             if (cy.get('div').should('have.class', 'modal-content')) {
    //     //                 cy.get('.btn-outline-success').click()
    //     //             } else {
    //     //             }
    //     //         })
    //     //     }
    //     // });
    // })
})




