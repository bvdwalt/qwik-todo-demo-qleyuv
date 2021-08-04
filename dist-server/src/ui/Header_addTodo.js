"use strict";
/**
 * @license
 * Copyright BuilderIO All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_js_1 = require("../data/Todo.js");
const qwik_js_1 = require("../qwik.js");
const Header_component_js_1 = require("./Header_component.js");
exports.default = qwik_js_1.injectEventHandler(Header_component_js_1.HeaderComponent, qwik_js_1.provideQrlExp('value'), qwik_js_1.provideQrlExp('code'), qwik_js_1.provideProviderOf(qwik_js_1.provideEntity(Todo_js_1.TodoEntity.MOCK_USER)), async function (inputValue, charCode, todoEntity) {
    if (charCode === 'Enter' && inputValue) {
        (await todoEntity()).newItem(inputValue);
        this.$state.text = '';
        qwik_js_1.markDirty(this);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyX2FkZFRvZG8uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInNyYy91aS9IZWFkZXJfYWRkVG9kby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOztBQUVILDZDQUE2QztBQUM3Qyx3Q0FNb0I7QUFDcEIsK0RBQXdEO0FBRXhELGtCQUFlLDRCQUFrQixDQUMvQixxQ0FBZSxFQUNmLHVCQUFhLENBQVMsT0FBTyxDQUFDLEVBQzlCLHVCQUFhLENBQVMsTUFBTSxDQUFDLEVBQzdCLDJCQUFpQixDQUFDLHVCQUFhLENBQUMsb0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUN0RCxLQUFLLFdBRUgsVUFBa0IsRUFDbEIsUUFBZ0IsRUFDaEIsVUFBcUM7SUFFckMsSUFBSSxRQUFRLEtBQUssT0FBTyxJQUFJLFVBQVUsRUFBRTtRQUN0QyxDQUFDLE1BQU0sVUFBVSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLG1CQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakI7QUFDSCxDQUFDLENBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBCdWlsZGVySU8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vQnVpbGRlcklPL3F3aWsvYmxvYi9tYWluL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBUb2RvRW50aXR5IH0gZnJvbSAnLi4vZGF0YS9Ub2RvLmpzJztcbmltcG9ydCB7XG4gIGluamVjdEV2ZW50SGFuZGxlcixcbiAgcHJvdmlkZVFybEV4cCxcbiAgcHJvdmlkZUVudGl0eSxcbiAgbWFya0RpcnR5LFxuICBwcm92aWRlUHJvdmlkZXJPZixcbn0gZnJvbSAnLi4vcXdpay5qcyc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL0hlYWRlcl9jb21wb25lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RFdmVudEhhbmRsZXIoXG4gIEhlYWRlckNvbXBvbmVudCxcbiAgcHJvdmlkZVFybEV4cDxzdHJpbmc+KCd2YWx1ZScpLFxuICBwcm92aWRlUXJsRXhwPHN0cmluZz4oJ2NvZGUnKSxcbiAgcHJvdmlkZVByb3ZpZGVyT2YocHJvdmlkZUVudGl0eShUb2RvRW50aXR5Lk1PQ0tfVVNFUikpLFxuICBhc3luYyBmdW5jdGlvbiAoXG4gICAgdGhpczogSGVhZGVyQ29tcG9uZW50LFxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcbiAgICBjaGFyQ29kZTogc3RyaW5nLFxuICAgIHRvZG9FbnRpdHk6ICgpID0+IFByb21pc2U8VG9kb0VudGl0eT5cbiAgKSB7XG4gICAgaWYgKGNoYXJDb2RlID09PSAnRW50ZXInICYmIGlucHV0VmFsdWUpIHtcbiAgICAgIChhd2FpdCB0b2RvRW50aXR5KCkpLm5ld0l0ZW0oaW5wdXRWYWx1ZSk7XG4gICAgICB0aGlzLiRzdGF0ZS50ZXh0ID0gJyc7XG4gICAgICBtYXJrRGlydHkodGhpcyk7XG4gICAgfVxuICB9XG4pO1xuIl19