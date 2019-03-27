module Commentable
    def comment
        'I love comments!'
    end
end


class Post
    extend Commentable
end

Post.comment
Post.singleton_class.ancestors