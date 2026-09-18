const ElementNode = @import("../types/element_node.zig");
const TextNode = @import("text_node.zig");

pub const DomNode = union(enum) {
    empty,
    element_node: ElementNode,
    text_node: TextNode,
};
